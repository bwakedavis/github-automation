let fs = require('fs');
require('dotenv').config()


let privatePem = fs.readFile('./kijaniyard.2020-10-05.private-key.pem', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });