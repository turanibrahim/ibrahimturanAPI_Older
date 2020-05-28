var express = require('express');
var router = express.Router();

// Require controller modules.
var AboutController = require('../src/controllers/AboutController');

/// ABOUT ROUTES ///

router.get('/', AboutController.about);
router.post('/create', AboutController.createAbout);
router.post('/update', AboutController.updateAbout);
router.post('/:id/delete', AboutController.deleteAbout);

module.exports = router;
