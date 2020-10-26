'use strict';
module.exports = (sequelize, DataTypes) => {
  const allthings = sequelize.define('allthings', {
    things: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  allthings.associate = function(models) {
    // associations can be defined here
  };
  return allthings;
};