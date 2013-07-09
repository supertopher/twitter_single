$(document).ready(function() {
  $('.a_beecha_ball').hide();
  $('.twitter_username').on('submit', function(event) {
    event.preventDefault();
    loadStarter();
    var usernameValue = $('.entered_username').val();
    $.ajax({
      url: "/" + usernameValue,
      method: 'get'
    }).done(function(requestData) {
      $('.a_beecha_ball').hide();
      $('.whole_thing').append(requestData).fadeIn();
      $('.twitter_username').fadeIn();
    });
  });

  $('.flizzard_tweets').click(function(event){
    event.preventDefault();
    loadStarter();
  });
});

var loadStarter = function(){
  $('.whole_thing').children().fadeOut();
  $('.a_beecha_ball').show();
  $.ajax({
      url: "http://localhost:9393/flizzardnation",
      method: 'get'
    }).done(function(requestData) {
      $('.a_beecha_ball').hide();
      $('.whole_thing').append(requestData).fadeIn();
      $('.twitter_username').fadeIn();
    });
}