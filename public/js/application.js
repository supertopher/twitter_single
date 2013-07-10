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

  $('.flizzard_tweet_link').click(function(event){
    event.preventDefault();
    loadStarter();
    $.ajax({
      url: "http://localhost:9393/tweet/flizzyfridays",
      method: 'get'
    }).done(function(requestData) {
      $('.a_beecha_ball').hide();
      $('.whole_thing').append(requestData).fadeIn();
      $('.twitter_username').fadeIn();
      tweetForm();
    });
  });


});

var loadStarter = function(){
  $('.whole_thing').children().fadeOut();
  $('.a_beecha_ball').show();
}

var tweetForm = function(){$('.flizzard_form').on('submit', function(event) {
    event.preventDefault();
    loadStarter();
    var tweetText = $('.text_to_tweet').val();
    $.post("/fizzytweet/post", {data: tweetText}).done(function(requestData){
      $('.a_beecha_ball').hide();
      $('.whole_thing').append(requestData).fadeIn();
      $('.twitter_username').fadeIn();
      tweetForm();
      });
  });
}