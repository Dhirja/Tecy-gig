const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

connectDB()

//rest object
const app = express();
app.use(express.json());


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/userRoutes"));


const PORT =  8080;


app.listen(PORT, () => {
    console.log(
        `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
        .bgBlue.white
    );
  });

//   dhirajdubey19965
// XfJVJ5WDV2ACzqqF