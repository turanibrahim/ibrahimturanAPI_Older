var express = require('express');
var router = express.Router();

// Require controller modules.
var ContactController = require('../src/controllers/ContactController');

/// ABOUT ROUTES ///

router.get('/socialMedias', ContactController.socialMedias);
/* router.post('/socialMedia/create', ContactController.createSocialMedia);
router.post('/socialMedia/update', ContactController.updateSocialMedia);
router.get('/socialMedia/:id/delete', ContactController.deleteSocialMedia); */
router.get('/contactForms', ContactController.contactForms);
/* router.post('/contactForm/create', ContactController.createContactForm);
router.get('/contactForm/:id/delete', ContactController.deleteContactForm);
 */
module.exports = router;
