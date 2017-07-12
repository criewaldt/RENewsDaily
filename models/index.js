var Sequelize = require('sequelize');
try {
  var config = require('../local/config.js');
} catch (err) {
  var config = {};
}
// sequelize initialization

var sequelize = new Sequelize(process.env.PGURI || config.PGURI, {
  dialect: 'postgres',
  logging: false, //turn off logging
  dialectOptions: {
    ssl: true
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection to Sequelize has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect Sequelize to the database:', err);
  });

var User = sequelize.define('User', {
  userid: {
    type: Sequelize.STRING,
    primaryKey: true
  }
});

User.sync().then(function() {
  //sync the db
});

module.exports = {
    User: User
};
