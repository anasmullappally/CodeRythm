const express = require("express");
const router = express.Router();
const {submitForm} = require('../controller/controller')

router.post('/form',submitForm)

module.exports = router;