module.exports = (sequelize, Sequelize) => {
  
  const Model = Sequelize.Model;
  class AboutSections extends Model {}

  AboutSections.init({
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    lang: {
      type: Sequelize.STRING
    },
    icons: {
      type: Sequelize.JSON
    }
  }, {
    sequelize,
    modelName: 'aboutSections',
    schema: 'ibrahimturan',
  });

  return AboutSections;
};