var User = require('./index').User;

User.sync({force:true}).then(function() {
  var data = [{
    userid: "criewaldt@gmail.com"
    }];
  
  User.bulkCreate(data).then(function(results) {
    console.log(results);    
  });
  
});