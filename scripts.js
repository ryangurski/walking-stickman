$(document).ready(function () {
  var initialBpm = parseInt($('#animation').data('bpm'));
  var clickCounter = 0;

  function updateAnimationSpeed(bpm) {
      var beatDuration = 60 / bpm;
      $('.head').css('animation-duration', beatDuration + 's');
      $('.left-arm').css('animation-duration', 2 * beatDuration + 's');
      $('.right-arm').css('animation-duration', 2 * beatDuration + 's');
      $('.left-leg').css('animation-duration', 2 * beatDuration + 's');
      $('.right-leg').css('animation-duration', 2 * beatDuration + 's');
      $('.shadow').css('animation-duration', beatDuration + 's');
  }

  updateAnimationSpeed(initialBpm);

  $('.button').on('click', function () {
      if (clickCounter < 4) {
          initialBpm += 40;
          clickCounter++;
      } else {
          initialBpm = parseInt($('#animation').data('bpm'));
          clickCounter = 0;
      }

      updateAnimationSpeed(initialBpm);

      updateSpeed();
  });

  function updateSpeed() {
      var currentSpeedElement = $('.speed');

      var currentSpeedText = currentSpeedElement.text().trim();
      var speedNumber = parseInt(currentSpeedText.split(' ')[1]);

      if (speedNumber === 5) {
          speedNumber = 1;
      } else {
          speedNumber++;
      }

      var newSpeedText = 'Speed ' + speedNumber;

      currentSpeedElement.text(newSpeedText);
  }
});