const dateCalcBtn = document.getElementById('Date calculator'),
      timerBtn = document.getElementById('Timer'),
      dateCalcMod = document.querySelector('.date-calculator'),
      timerMod = document.querySelector('.timer');

function TimeMod(){
    timerMod.style.display = 'block';
    dateCalcMod.style.display = 'none';
}
function DateCalcMod(){
    timerMod.style.display = 'none';
    dateCalcMod.style.display = 'block';
}

timerBtn.addEventListener('click',TimeMod);
dateCalcBtn.addEventListener('click',DateCalcMod);