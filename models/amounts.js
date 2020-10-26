'use strict';
module.exports = (sequelize, DataTypes) => {
  const amounts = sequelize.define('amounts', {
    thing_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    description: DataTypes.STRING
  }, {});
  amounts.associate = function(models) {
    // associations can be defined here
  };
  return amounts;
};