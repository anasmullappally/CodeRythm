const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  email: {
    type: String,
   
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  }
});

module.exports = mongoose.model("formData", formSchema);
