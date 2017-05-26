(function  () {
  'use strict';
  function Stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {
      if (watch.isOn) {
        var timePassed = delta();
        time += timePassed;
      }

      var formattedTime = timeFormatter(time);
      elem.textContent = formattedTime;
    }

    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
      var time = new Date(timeInMilliseconds);
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();
      if (minutes.length < 2) {
        minutes = 0 + minutes;
      }

      if (seconds.length < 2) {
        seconds = 0 + seconds;
      }

      if (milliseconds.length < 3) {
        milliseconds = 0 + milliseconds;
      }

      return minutes + ': ' + seconds + ': ' + milliseconds;
    }

    this.isOn = false;

    this.start = function() {
      if (!this.isOn) {
        interval = setInterval(update.bind(this), 20);
        offset = Date.now();
        this.isOn = true;
      }
    };

    this.stop = function() {
      if (this.isOn) {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
      }
    };

    this.reset = function() {
      time = 0;
      update();
    };
  }

var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start() {
  watch.start();
  toggleBtn.textContent = 'Зупинити';
}

function stop() {
  watch.stop();
  toggleBtn.textContent = 'Запустити';
}

toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start()
});

resetBtn.addEventListener('click', function() {
    watch.reset();
});
  })();
