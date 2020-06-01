const Joi = require('@hapi/joi');
const models = require('../models');
const Contact = models.socialMedias;
const ContactForm = models.contactForms;

exports.socialMedias = function(req, res) {
  const data = req.params
  Contact.findAll({
    order: [
      ['sequence', 'ASC']
    ]
  }).then(data => {
    res.send(data);
  });
};

exports.createSocialMedia = function(req, res) {

  return res.status(405);
  /* const data = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required(),
    color: Joi.string().allow(null),
    sequence: Joi.number().required(),
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: error.details,
    });
  } else {
    Contact.create({ 
      name: data.name,
      link: data.link,
      color: data.color,
      sequence: data.sequence,
    }).then(data => {
      res.status(200).json(data);
    });
  } */
};

exports.updateSocialMedia = function(req, res) {

  return res.status(405);
  /* const data = req.body;

  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    link: Joi.string().required(),
    color: Joi.string().allow(null),
    sequence: Joi.number().required(),
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: error,
    });
  } else {
    Contact.update({ 
      name: data.name,
      link: data.link,
      color: data.color,
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
  } */
};

exports.deleteSocialMedia = function(req, res) {

  return res.status(405);
  /* const data = req.params 
  Contact.destroy({
    where: {
      id: data.id
    }
  }).then((result) => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json(error);
  });
}

exports.contactForms = function(req, res) {
  const data = req.params
  ContactForm.findAll({
    order: [
      ['sequence', 'ASC']
    ]
  }).then(data => {
    res.send(data);
  }); */
};

exports.createContactForm = function(req, res) {

  return res.status(405)
  /* const data = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email(),
    description: Joi.string().required()
  });

  const { error }= schema.validate(data);

  if (error) {
    res.status(422).json({
        status: 'error',
        message: error.details,
    });
  } else {
    ContactForm.create({ 
      name: data.name,
      surname: data.surname,
      email: data.email,
      description: data.description,
    }).then(data => {
      res.status(200).json(data);
    });
  } */
};

exports.deleteContactForm = function(req, res) {
  return res.status(405)
  /* const data = req.params 
  ContactForm.destroy({
    where: {
      id: data.id
    }
  }).then((result) => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json(error);
  }); */
}