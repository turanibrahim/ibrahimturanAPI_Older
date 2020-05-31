var express = require('express');
var router = express.Router();

// Require controller modules.
var ExperienceController = require('../src/controllers/ExperienceController');

/// ABOUT ROUTES ///

router.get('/:lang', ExperienceController.experiences);
router.post('/create', ExperienceController.createExperience);
router.post('/update', ExperienceController.updateExperience);
router.get('/:id/delete', ExperienceController.deleteExperience);

module.exports = router;
