'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    person_name: DataTypes.STRING
  }, {});
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};