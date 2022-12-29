// const https = require('https');

// const fetchJson = (url, callback) => {
//   https.get(url, (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       try {
//         const parsedData = JSON.parse(data);
//         callback(parsedData);
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   }).on('error', (error) => {
//     console.error(error);
//   });
// }

// module.exports = fetchJson;

const {get} = require('callback-fetch');

const fetchJson = (url, callback) => {
  const responseObject = get(url, (body) => { return JSON.parse(body) });
  console.log(responseObject);
  callback(responseObject)
}

module.exports = fetchJson;

