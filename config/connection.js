const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

sequelize.authenticate().then(()=> {
  console.log("Connection has been stablised successfully.");
  }).catch(err => {
  console.log("Unable to connect to the database" , err);
  })

module.exports = sequelize;
