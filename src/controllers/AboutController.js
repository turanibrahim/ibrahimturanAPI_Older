const models = require('../models');
const About = models.about;

exports.about = function(req, res) {
  const data = About.findAll();
  res.send(data);
};

exports.createAbout = function(req, res) {

  const Joi = require('@hapi/joi');

  const data = req.body;

  const schema = Joi.object({
    aboutMe: Joi.string().required(),
    language: Joi.string().required(),
  });

  const { error }= schema.validate(data);

  if (error) {
    // send a 422 error response if validation fails
    res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
    });
  } else {
    About.create({ 
      aboutMe: data.aboutMe,
      language: data.language,
    }).then(data => {
      res.status(200).json(data);
    });
  }
};

exports.updateAbout = function(req, res) {
  res.send('NOT IMPLEMENTED: Author detail');
};

exports.deleteAbout = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};