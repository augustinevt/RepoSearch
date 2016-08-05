var apiKey = require('./../.env').apiKey;

function GitHub() {}

GitHub.prototype.getUserInfo = function(username, callback) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response) {
     callback(response);
   }).fail(function(error) {
     console.log(error);
   });
}

GitHub.prototype.getUserRepos = function(username, callback) {
  $.get('https://api.github.com/search/repositories?q=user:'+ username + '&access_token=' + apiKey).then(function(response) {
     callback(response);
   }).fail(function(error) {
     console.log(error);
   });
}

exports.GitHub = GitHub;
