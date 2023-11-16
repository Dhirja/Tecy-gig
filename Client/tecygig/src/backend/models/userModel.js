const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
        match: /^\d{10}$/, // Phone number validation using regex (10 digits)
      },
      address: {
         type: String,
         required:true,
      },
      selectedOption: {
        type: String,
        required:true, // Define possible values for the select message
        
      },
      message: {
        type: String,
        required:true,
     },
    
    });

module.exports = mongoose.model("users", userSchema);