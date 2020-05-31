module.exports = (sequelize, Sequelize) => {
  
  const Model = Sequelize.Model;
  class ContactForms extends Model {}

  ContactForms.init({
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  }, {
    sequelize,
    modelName: 'contactForms',
    schema: 'ibrahimturan',
  });

  return ContactForms;
};