'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WishList.init({
    userId: DataTypes.INTEGER,
    slug: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WishList',
  });
  return WishList;
};