
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

function displayUserRepos(response) {
    $('#user-repos').html("");
  response.items.forEach(function(repo, i) {
    $('#user-repos').append('<div class="well repo" id=repo'+ i +'></div>')
    $('#repo'+i).append('<h2>' + repo.name + '</h2>');


    if (repo.description) {
      $('#repo'+i).append('<p class="description">' + repo.description + '</p>');
    }else{
      $('#repo'+i).append('<p class="description">This repository has no description!?</p>');
    }
  });

  $('.repo').click(function(){
    $(this).find('.description').slideToggle();
  })

}



$(document).ready(function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    current_github = new GitHub();

    var username = $('#username').val();
    current_github.getUserInfo(username, toConsole);
    current_github.getUserInfo(username, displayUserInfo);
    current_github.getUserRepos(username, toConsole);
    current_github.getUserRepos(username, displayUserRepos);

  });
});
