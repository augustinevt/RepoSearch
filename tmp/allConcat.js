
var GitHub = require('./../js/git_hub.js').GitHub;

function toConsole(result) {
  console.log(result);
}


function unfoundUser() {
  $('.user-info').html('<img src="http://i.imgur.com/W7mqS78.gif" alt="404 gif" />');
  $('#user-repos').html('');

}


function displayUserInfo(response) {
  var html = $('#user-main-store').html();
  $('.user-info').html(html);
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

  $('#user-repos').fadeIn();

}



$(document).ready(function() {

  $('body').click(function(){
    $('#unfound').fadeOut('slow')
  });

  $('#search-form').submit(function(e) {
    e.preventDefault();
    current_github = new GitHub();

    var username = $('#username').val();
    current_github.getUserInfo(username, toConsole);
    current_github.getUserInfo(username, displayUserInfo, unfoundUser);
    current_github.getUserRepos(username, toConsole);
    current_github.getUserRepos(username, displayUserRepos, unfoundUser);

  });
});
