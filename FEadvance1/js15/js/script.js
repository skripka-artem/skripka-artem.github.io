
var counter = document.getElementById('counter'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop')

var hour, min, sec, timer;

counter.innerText = '0' + ':' + '0' + ':' + '0';

function initcounter() {
    counter.innerText = hour + ':' + min + ':' + sec; }

class Watch {
    constructor(){
    this.watch = function () {
        if (sec === 59) {
            sec = 0;
            min++;
            initcounter();
        } else if (min === 60) {
            min = 0;
            hour++;
            initcounter();
        } else {
            sec++;
            initcounter();
        }
    };
    this.startW = function ()  {
        hour = 0;
        min = 0;
        sec = 0;

        initcounter();

        timer = setInterval(this.watch, 1000);
    }

}}

class Timer extends Watch{
    stop() {
        console.log(hour +":"+ min +":" + sec )
        clearInterval(timer);
    }
}

let result = new Timer()
console.log(result)


start.addEventListener('click',  function () {
    result.watch();
    result.startW()
});

stop.addEventListener('click',  result.stop);