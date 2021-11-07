  import {} from '../../node_modules/howler/dist/howler.js'
let h = document.getElementById("hour"),
    m = document.getElementById("minute"),
    s = document.getElementById("sec"),
    startTimer = null;

      var sound = new Howl({
        urls: ['../../sound/stop.mp3'],
        volume: 1,
      });

    function timerItems(){
        if(h.value == 0 && m.value == 0 && s.value < 1){
            stopInterval();
            sound.play(); 
        }
        if(h.value == 0 && m.value == 0 && s.value == 0){
            h.value = 0;
            m.value = 0;
            s.value = 0; 
                 
        } else if(s.value != 0){
            s.value--;
        } else if(m.value != 0 && s.value == 0){
            s.value = 59;
            m.value--;
        } else if(h.value != 0 && m.value == 0){
            m.value = 60;
            h.value--;
        }
      
        return;
    }
    function startInterval(){
        startTimer = setInterval(function() {
            timerItems();
        }, 1000);
    }

    function stopInterval() {
        clearInterval(startTimer);
         
    }

    function endOfTime() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    };


    export {startInterval,stopInterval,startTimer,endOfTime}