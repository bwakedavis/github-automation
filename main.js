let fs = require('fs');
var GitHub = require('github-api');
var jwt = require('jsonwebtoken');
require('dotenv').config()


let PRIVATE_PEM = fs.readFileSync('public.pem'); 

  // basic auth
var gh = new GitHub({
  
     token: process.env.MY_OAUTH_TOKEN
   
});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function(err, notifications) {
//    // do some stuff
//    console.log(notifications)
// });

me.getProfile(function(err, profile) {
  // do some stuff
  if(err){
    console.log(err)
  }else{
    console.log(profile)
  }
  
});

me.listFollowers(function(err, followers) {
  // do some stuff
  if(err){
    console.log(err)
  }else{
    console.log(followers)
  }
  
});