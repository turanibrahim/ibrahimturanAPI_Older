const Joi = require('@hapi/joi');
const models = require('../models');
const AboutSections = models.aboutSections;

exports.aboutSections = function(req, res) {
  const data = req.params
  AboutSections.findAll({
    where: {
      lang: data.lang
    },
    order: [
      ['sequence', 'ASC']
    ]
  }).then(data => {
    res.send(data);
  });
};

exports.createAboutSection = function(req, res) {

  const data = req.body;

  const schema = Joi.object({
    title: Joi.string().allow(null),
    description: Joi.string().allow(null),
    icons: Joi.array().allow(null),
    lang: Joi.string().required(),
    sequence: Joi.number().allow(null),
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
    });
  } else {
    AboutSections.create({ 
      title: data.title,
      description: data.description,
      icons: data.icons,
      lang: data.lang,
      sequence: data.sequence
    }).then(data => {
      res.status(200).json(data);
    });
  }
};

exports.updateAboutSection = function(req, res) {

  const data = req.body;

  const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().allow(null),
    description: Joi.string().allow(null),
    icons: Joi.array().allow(null),
    lang: Joi.string().required(),
    sequence: Joi.number().allow(null),
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: 'Invalid request data',
    });
  } else {
    AboutSections.update({ 
      title: data.title,
      description: data.description,
      icons: data.icons,
      title: data.title,
      lang: data.lang,
      sequence: data.sequence,
      updatedAt: Date.now()
    },{
      where: {
        id: data.id
      }
    }).then((result) => {
      res.status(200).json(result);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
};

exports.deleteAboutSection = function(req, res) {
  const data = req.params 
  AboutSections.destroy({
    where: {
      id: data.id
    }
  }).then((result) => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json(error);
  });
}