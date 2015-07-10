'use strict';

var express = require('express');
var controller = require('./things.controller'); // loads things.controller.js

var router = express.Router();

router.get('/1', controller.getThings1); // Set the get function of page 1.
router.get('/2', controller.getThings2); // Set the get function of page 2.

module.exports = router;
