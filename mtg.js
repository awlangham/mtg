$(function() {
  var player1Life = 20;
  var player2Life = 20;

  function CounterThing() {
    this.selector = '';
    this.count = 0;
    this.init = function(selector) {
      if (this.selector != selector) {
          this.count = 0;
          $(this.selector).removeClass('active');
          clearTimeout(this.timeout);
          this.selector = selector;
      }
    },
    this.place = function() {
      $(this.selector).text(this.count).addClass('active');
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function(a) {
        $(a.selector).removeClass('active');
        a.count = 0;
      }, 1500, this);
    }
  }

  pressCounter1 = new CounterThing();
  pressCounter2 = new CounterThing();

  $('.player1 .minusButton').click(function() {
    --player1Life;
    $('.player1LifeText').text(player1Life);

    pressCounter1.init('.player1MinusCounter');
    --pressCounter1.count;
    pressCounter1.place();
  });

  $('.player1 .plusButton').click(function() {
    ++player1Life;
    $('.player1LifeText').text(player1Life);

    pressCounter1.init('.player1PlusCounter');
    ++pressCounter1.count;
    pressCounter1.place();
  });

  $('.player2 .minusButton').click(function() {
    --player2Life;
    $('.player2LifeText').text(player2Life);

    pressCounter2.init('.player2MinusCounter');
    --pressCounter2.count;
    pressCounter2.place();
  });

  $('.player2 .plusButton').click(function() {
    ++player2Life;
    $('.player2LifeText').text(player2Life);

    pressCounter2.init('.player2PlusCounter');
    ++pressCounter2.count;
    pressCounter2.place();
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

  $('.settingsButton').click(function() {
    $(this).siblings('.colorSpan').toggleClass('hidden');
  });
});
