'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    type: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER,

    // id_product: DataTypes.DECIMAL,
    // id_add: DataTypes.DECIMAL,
    // id_request: DataTypes.DECIMAL
  }, {});
  item.associate = function(models) {
    item.hasMany(models.products, { through: 'productId' });
    item.hasMany(models.requests, { through: 'requestId' });
    // associations can be defined here
  };
  return item;
};