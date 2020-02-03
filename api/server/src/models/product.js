'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    menu: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    // product.belongsToMany(models.items)
  };
  return product;
};

