module.exports = (sequelize, Sequelize) => {
  
  const Model = Sequelize.Model;
  class Experiences extends Model {}

  Experiences.init({
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    startingDate: {
      type: Sequelize.DATE
    },
    terminationDate: {
      type: Sequelize.DATE
    },
    logo: {
      type: Sequelize.STRING
    },
    lang: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'experiences',
    schema: 'ibrahimturan',
  });

  return Experiences;
};