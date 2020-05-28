module.exports = (sequelize, Sequelize) => {
  
  const Model = Sequelize.Model;
  class About extends Model {}

  About.init({
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    aboutMe: {
      type: Sequelize.TEXT
    },
    language: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'about',
    schema: 'ibrahimturan',
    freezeTableName: true
  });

  return About;
};