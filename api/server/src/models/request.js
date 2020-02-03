'use strict';
module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define('request', {
    status: DataTypes.STRING,
    desk: DataTypes.DECIMAL
  }, {});
  request.associate = function(models) {
    // request.belongsToMany(models.items)
  };
  return request;
};