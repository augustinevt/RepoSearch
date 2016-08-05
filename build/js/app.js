(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '0574454a261f55acf62e0d6c53d12e38695ab617';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){

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

},{"./../js/git_hub.js":2}]},{},[3]);
