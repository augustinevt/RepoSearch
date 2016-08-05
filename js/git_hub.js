var apiKey = require('./../.env').apiKey;

function GitHub() {}

GitHub.prototype.getUserInfo = function(username, success, failure) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response) {
     success(response);
   }).fail(function(error) {
     failure();
     console.log(error);
   });
}

GitHub.prototype.getUserRepos = function(username, success, failure) {
  $.get('https://api.github.com/search/repositories?q=user:'+ username + '&access_token=' + apiKey).then(function(response) {
     success(response);
   }).fail(function(error) {
     failure();
     console.log(error);
   });
}

exports.GitHub = GitHub;
