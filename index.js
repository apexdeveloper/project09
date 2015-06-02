var express = require('express');
var app = express();
var sf = require('node-salesforce');

var sf = require('node-salesforce');

var conn = new sf.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env. 
    loginUrl : 'https://login.salesforce.com', 
    clientId : '3MVG9VmVOCGHKYBQF1EZ95dK8KOKe1UNNkgolO1rCFgjqeD8YjIqSFsOb6XYEa902EUiqg7_O0TTFATNLlobR',
    clientSecret : '8108142516377505321',
    redirectUri : 'https://login.salesforce.com'
  }
});
var username = 'ramit.singh@cognizant.com';
var password = 'ramit_229';
	

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World using node.js!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
console.log('Hello World');