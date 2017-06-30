const functions = require('firebase-functions');
const http = require('http');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.getAnimeDetails = functions.https.onRequest((request, response) => {
  const animeId = parseInt(request.params['0'].substring(1, request.params['0'].length));
  // console.log(animeId);
  // const options = {
  //   host: 'https://jikan.me',
  //   path: '/api/anime/' + animeId,
  //   method: 'GET',
  // };
  // console.log(JSON.stringify(options));
  // const req = http.get(options, (res) => {
  //   console.log('STATUS: ' + res.statusCode);
  //   console.log('HEADERS: ' + JSON.stringify(res.headers));
  //   res.setEncoding('utf8');
  //   res.on('data', result => {
  //     console.log(JSON.stringify(result));
  //   });
  // });
  // console.log('goes here??');
  // req.on('error', (e) => {
  //   console.error(`problem with request: ${e.message}`);
  // });
  // req.end();
  // console.log('or goes here????');
  response.send(JSON.stringify(animeId));
});
