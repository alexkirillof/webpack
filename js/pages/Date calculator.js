import {printResult,printError} from '../utils/print.js';
import getDateDiff from '../utils/getDateDiff.js';
const form = document.getElementById('calcDate');
     
form.onsubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData(form),
    dateFrom = formData.get('dateFrom'),
    dateTo = formData.get('dateTo');
    if(!dateTo || !dateFrom){
       printError('Enter a value in both fields !');
       return
    }
    const dateDiff = getDateDiff(dateFrom,dateTo);
    printResult(dateDiff)
}



