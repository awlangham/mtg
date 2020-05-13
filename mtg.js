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

  $('.colorCircle.white').click(function() {
    $(this).closest('.innerDiv').parent().removeClass('blue black red green').addClass('white');
  });

  $('.colorCircle.blue').click(function() {
    $(this).closest('.innerDiv').parent().removeClass('white black red green').addClass('blue');
  });

  $('.colorCircle.black').click(function() {
    $(this).closest('.innerDiv').parent().removeClass('white blue red green').addClass('black');
  });

  $('.colorCircle.red').click(function() {
    $(this).closest('.innerDiv').parent().removeClass('white blue black green').addClass('red');
  });

  $('.colorCircle.green').click(function() {
    $(this).closest('.innerDiv').parent().removeClass('white blue black red').addClass('green');
  });
});
