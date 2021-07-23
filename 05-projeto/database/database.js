// import Sequelize from 'sequelize'
const Sequelize = require('sequelize')

const connect = new Sequelize('guiaperguntas', 'root', 'J6t2hybt26@',{
  host: 'localhost',
  dialect:"mysql"
})

module.exports = connect