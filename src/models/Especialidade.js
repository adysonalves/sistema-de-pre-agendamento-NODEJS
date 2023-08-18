const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const Especialidade = conn.define('especialidade', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull:false,
        required: true
    }
});

module.exports = Especialidade;