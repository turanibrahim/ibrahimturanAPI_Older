module.exports = (sequelize, Sequelize) => {
  
  const Model = Sequelize.Model;
  class SocialMedias extends Model {}

  SocialMedias.init({
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    sequence: {
      type: Sequelize.INTEGER
    }
  }, {
    sequelize,
    modelName: 'socialMedias',
    schema: 'ibrahimturan',
  });

  return SocialMedias;
};