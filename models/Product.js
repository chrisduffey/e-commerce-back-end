// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTERGER,
      allowsNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowsNull: false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowsNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.DECIMAL,
      allowsNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTERGER,
      allowsNull: true, // If allowNull is not set to true then cant delete?
      refrences: {
        model: 'category',
        key: 'id'
      }

    }
   
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
