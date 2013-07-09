$(document).ready(function() {
  $('.a_beecha_ball').hide();
  $('.twitter_username').on('submit', function(e) {
    e.preventDefault();
    $('.whole_thing').children().fadeOut();
    var usernameValue = $('.entered_username').val();
    $('.a_beecha_ball').show();
    $.ajax({
      url: "/" + usernameValue,
      method: 'get'
    }).done(function(requestData) {
      $('.a_beecha_ball').hide();
      $('.whole_thing').append(requestData).fadeIn();
      $('.twitter_username').fadeIn();
    });
  });
});
