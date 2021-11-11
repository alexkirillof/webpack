import {startInterval,stopInterval,startTimer,endOfTime} from '../utils/timerItems.js'

let   start = document.getElementById('start'),
      stop = document.getElementById('stop'),
      reset = document.getElementById('reset');

start.addEventListener('click', startInterval);

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

reset.addEventListener('click', function(){
    endOfTime()
    stopInterval()
})



