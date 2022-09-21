const dotenv = require("dotenv");
dotenv.config();
const form = require("../models/formModel");
module.exports = {
  submitForm: async (req, res) => {
    // console.log(req.body);
    try {
        const response = await form.create({ ...req.body.data });
        res.status(200).json({ msg: "Form Submitted" });
        
    } catch (error) {
        console.log(error);
        res.status(400)
    }
   
  },
};
