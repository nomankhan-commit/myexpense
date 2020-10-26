'use strict';
module.exports = (sequelize, DataTypes) => {
  const person_amounts = sequelize.define('person_amounts', {
    person_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    description: DataTypes.STRING
  }, {});
  person_amounts.associate = function(models) {
    // associations can be defined here
  };
  return person_amounts;
};