let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json

// // setting up aylien API
// const aylien = require("aylien_textapi")
//
// let textapi = new aylien({
//   application_id: process.env.API_ID,
//   application_key: process.env.API_KEY
// })
//
// let apidata;
//
// textapi.sentiment({
//   'text': 'John is a very good football player!'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//     apidata = response;
//   }else {
//     console.log(error)
//   }
// });
//
// console.log(apidata)
// module.exports = apidata
