const {get} = require('callback-fetch');

class GithubClient {
  fetchRepositoryData(urlNew, callback) {
    const url = 'https://api.github.com/repos/' + urlNew;
    get(url, (body) => {callback(JSON.parse(body))})
  }
}

module.exports = GithubClient;