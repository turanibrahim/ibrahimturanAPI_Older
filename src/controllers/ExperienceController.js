const Joi = require('@hapi/joi');
const models = require('../models');
const Experiences = models.experiences;

exports.experiences = function(req, res) {
  const data = req.params
  Experiences.findAll({
    where: {
      lang: data.lang
    },
    order: [
      ['startingDate', 'DESC']
    ]
  }).then(data => {
    res.send(data);
  });
};

exports.createExperience = function(req, res) {

  return res.status(405)
  /* const data = req.body;

  const schema = Joi.object({
    title: Joi.string().required(),
    company: Joi.string().required(),
    description: Joi.string().allow(null),
    startingDate: Joi.date().required(),
    terminationDate: Joi.date().allow(null),
    lang: Joi.string().required()
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: error.details,
    });
  } else {
    Experiences.create({ 
      title: data.title,
      company: data.company,
      description: data.description,
      startingDate: data.startingDate,
      terminationDate: data.terminationDate,
      lang: data.lang,
    }).then(data => {
      res.status(200).json(data);
    });
  } */
};

exports.updateExperience = function(req, res) {

  return res.status(405)
  /* const data = req.body;

  const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    company: Joi.string().required(),
    description: Joi.string().allow(null),
    startingDate: Joi.date().required(),
    terminationDate: Joi.date().allow(null),
    lang: Joi.string().required()
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: error,
    });
  } else {
    Experiences.update({ 
      title: data.title,
      company: data.company,
      description: data.description,
      startingDate: data.startingDate,
      terminationDate: data.terminationDate,
      lang: data.lang,
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
  } */
};

exports.deleteExperience = function(req, res) {

  return res.status(405)
  /* const data = req.params 
  Experiences.destroy({
    where: {
      id: data.id
    }
  }).then((result) => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json(error);
  }); */
}