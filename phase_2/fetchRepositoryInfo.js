// const https = require('https');

// const fetchRepositoryInfo = (repository, callback) => {
//   const options = {
//     hostname: 'api.github.com',
//     path: `/repos/${repository}`,
//     headers: { 'User-Agent': 'node.js' },
//   };

//   https.get(options, (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       try {
//         const repositoryInfo = JSON.parse(data);
//         callback(repositoryInfo);
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   }).on('error', (error) => {
//     console.error(error);
//   });
// }

// module.exports = fetchRepositoryInfo;

const { get } = require('callback-fetch');

const fetchRepositoryInfo = (urlNew, callback) => {
  url = 'https://api.github.com/repos/' + urlNew 
  get(url, (body) => {callback(JSON.parse(body))})
};

module.exports = fetchRepositoryInfo;