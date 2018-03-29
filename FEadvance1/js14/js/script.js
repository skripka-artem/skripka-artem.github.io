
(function() {

    var buttonStart = document.querySelector(".start");
    var buttonStop = document.querySelector(".stop");
    var wrapper =  document.getElementById('t');


    let timeS = {};

    function SuperTimeObj(){
        this.time = function() {
            let today = new Date();
            today = Math.floor((today)/1000);
            tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
            tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
            thour=today%24; today=Math.floor(today/24);
            timestr=thour+" hours "+tmin+" min "+tsec+" sec";
            wrapper.innerHTML=timestr;
        }

        this.start = function() {
            timerS = setInterval(this.time, 1000);
            let startdate = new Date();
            this.startTime = startdate;
        }

        this.stop = function() {
            clearInterval(timerS);
            let stopdate = new Date();
            this.stopTime = stopdate;
            this.interval = Math.floor((this.stopTime - this.startTime)/1000);
            wrapper.innerHTML = `interval: ${this.interval} sec`;
        }

    }

    function timeObj(start, stop){
        this.startTime = start;
        this.stopTime = stop;
        this.interval = stop - start;
    }

    timeObj.prototype = new SuperTimeObj();

    var obj = new timeObj(10, 15);

    buttonStart.addEventListener("click", function(){
        obj.start();
        console.log(obj);
    });

    buttonStop.addEventListener("click", function(){
        obj.stop();
        console.log(obj);
    });


    console.log(obj);

})();

var x=5

for ( i=0; i<5; i++) {   x=x+3

}

console.log(x);