const express = require('express');
const landingController = require('./landing.controller');

const router = express.Router();

router.get('/', landingController.get);

module.exports = router;
