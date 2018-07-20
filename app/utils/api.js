var axios = require('axios');

// methods for importing into other modules

// make a request to Github API
module.exports = {
    fetchPopularRepos: function (language) {
      var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
  
      return axios.get(encodedURI)
        .then(function (response) {
          return response.data.items;
        });
    }
  };    