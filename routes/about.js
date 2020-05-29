var express = require('express');
var router = express.Router();

// Require controller modules.
var AboutController = require('../src/controllers/AboutController');

/// ABOUT ROUTES ///

router.get('/:lang', AboutController.aboutSections);
router.post('/create', AboutController.createAboutSection);
router.post('/update', AboutController.updateAboutSection);
router.get('/:id/delete', AboutController.deleteAboutSection);

module.exports = router;
