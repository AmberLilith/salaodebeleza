const {DataTypes} = require('sequelize');

const db = require("../database/connection");

const Client = db.define('Client',{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    mainPhone:{
        type: DataTypes.STRING,
        require:true
    },
    secondaryPhone:{
        type: DataTypes.STRING,
        require:true
    }
})

module.exports = Client
