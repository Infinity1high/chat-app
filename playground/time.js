var moment = require ('moment');
var createdAt=1234;
var date = moment(createdAt);
// date.add(1,'year');
var someTimeStamp = moment();
console.log(someTimeStamp);
console.log(date.format('h:mm a '));

