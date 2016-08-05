
var apiKey = '0574454a261f55acf62e0d6c53d12e38695ab617'

$(document).ready(function() {
  $('#username-button').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $('.showWeather').text("The city you have chosen is " + username + ".");
    $.get('https://api.github.com/search/repositories?q=user:'+ username + '&access_token=' + apiKey).then(function(response) {
       console.log(response);
     }).fail(function(error) {
       console.log(response);
     });
  });
});
