$(function() {
  var player1Life = 20;
  var player2Life = 20;

  $('.player1 .minusButton').click(function() {
    --player1Life;
    $('.player1LifeText').text(player1Life);
  });

  $('.player1 .plusButton').click(function() {
    ++player1Life;
    $('.player1LifeText').text(player1Life);
  });

  $('.player2 .minusButton').click(function() {
    --player2Life;
    $('.player2LifeText').text(player2Life);
  });

  $('.player2 .plusButton').click(function() {
    ++player2Life;
    $('.player2LifeText').text(player2Life);
  });
});
