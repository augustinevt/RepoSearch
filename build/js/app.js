(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var apiKey = '0574454a261f55acf62e0d6c53d12e38695ab617'

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var user = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + user + ".");
    $.get('https://api.github.com/search/repositories?q=user:'+ user + '&access_token=' + apiKey).then(function(response) {
       console.log(response);
     }).fail(function(error) {
       console.log(response);
     });
  });
});

},{}]},{},[1]);
