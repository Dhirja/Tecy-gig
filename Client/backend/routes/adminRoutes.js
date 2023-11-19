const express = require("express");

const {
  customarController,
  deleteCustamarController,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/customardata", customarController);
router.delete("/:id", deleteCustamarController);

module.exports = router;
