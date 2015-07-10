'use strict';

var express = require('express');
var controller = require('./sample.controller'); // loads sample.controller.js
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json()); // required to read the posted body of a request - which is done inside the POST functions controller

router.get('/1', controller.getStuff1); // Set the get function of page 1.
router.post('/1', controller.postStuff); // Set the post function of page 1.

router.get('/2', controller.getStuff2); // Set the get function of page 2.

module.exports = router;
