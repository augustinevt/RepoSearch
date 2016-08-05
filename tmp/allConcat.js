
var GitHub = require('./../js/git_hub.js').GitHub;

function toConsole(result) {
  console.log(result);
}

function displayUserInfo(response) {
  $('#user-img').attr('src',response.avatar_url);
  $('#user-name').text(response.name);
  $('.user-url').attr('href',response.html_url);
  $('#user-following').text(response.following);
  $('#user-followers').text(response.followers);
  $('#user-repo-count').text(response.public_repos);
  $('.user-info').fadeIn();
}



$(document).ready(function() {
  $('#username-button').click(function() {

    current_github = new GitHub();

    var username = $('#username').val();
    $('#username').val("");

    current_github.getUserInfo(username, toConsole);
    current_github.getUserInfo(username, displayUserInfo);
    current_github.getUserRepos(username, toConsole);

  });
});
