// models/autoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connect'); // Importar la conexión

// Definir el modelo 'Auto' que corresponde a la tabla 'autos' en la base de datos
const Auto = sequelize.define('Auto', {
  // Definir los campos de la tabla
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'autos',  
  timestamps: false     
});

module.exports = Auto; 
