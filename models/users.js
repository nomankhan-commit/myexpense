'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    roles_id: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};