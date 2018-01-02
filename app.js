console.log("Starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
var filteredArray=_.uniq([1,'Shalini','Reeshob',9,0,1]);
console.log(filteredArray);
//console.log(_.isString(true));
//console.log(_.isString('Shalini'));
//var res=notes.addNote();
//var user = os.userInfo();
//console.log(user);
//fs.appendFile('Greetings.txt',`Hello ${user.username}! You are ${notes.age}!`);
//console.log(res);
//var result=notes.add(3,5);
//console.log(result);
