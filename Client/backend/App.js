const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

connectDB();

//rest object
const app = express();
app.use(express.json());

//middlewares
// app.use(express.json());
// app.use()
app.use(cors());
app.use(morgan("dev"));
app.use("/files", express.static("files"));
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/customer", require("./routes/userRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use("/api/v1/std", require("./routes/studentRoutes"));
app.use("/api/v1/custdata", require("./routes/adminRoutes"));

app.use("/api/v1/job", require("./routes/hrRoutes"));

const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});

// Pinging ec2-44-218-55-143.compute-1.amazonaws.com [44.218.55.143] with 32 bytes of data:
// Request timed out.
// Request timed out.
// Request timed out.
// Request timed out.

// Ping statistics for 44.218.55.143:
//     Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)
