const {DataTypes} = require('sequelize');
const conn = require('../database/conn');
const Cliente = require('./Cliente');
const Especialidade = require('./Especialidade');

const Agendamento = conn.define('agendamento', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        required: true
    },
    turno:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});


Cliente.hasOne(Agendamento, {
    foreignKey: {
        name: 'id_cliente'
    },
    onDelete: 'RESTRICT'
});
Agendamento.belongsTo(Cliente, {
    foreignKey: {
        name: 'id_cliente'
    },
    onDelete: 'RESTRICT'
});

Especialidade.hasOne(Agendamento, {
    foreignKey: {
        name: 'id_especialidade'
    },
    onDelete: 'RESTRICT'
});
Agendamento.belongsTo(Especialidade, {
    foreignKey: {
        name: 'id_especialidade'
    },
    onDelete: 'RESTRICT'
});


module.exports = Agendamento;

