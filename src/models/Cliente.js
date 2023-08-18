const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const Cliente = conn.define('cliente', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    numberIsWhatsApp:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Cliente;