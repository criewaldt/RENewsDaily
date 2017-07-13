var AWS = require('aws-sdk');
AWS.config.loadFromPath('./local/aws.json');
var dynamodb = new AWS.DynamoDB();


function addSubscriber(email){
  var params = {
  Item: {
   "uid": {
     S: email
    }
  }, 
  ReturnConsumedCapacity: "TOTAL", 
  TableName: "renews-subscribers"
 };
 dynamodb.putItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    ConsumedCapacity: {
     CapacityUnits: 1, 
     TableName: "Music"
    }
   }
   */
 });
}

module.exports = addSubscriber;

