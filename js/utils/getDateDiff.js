import {DateTime} from './luxon.js'
export default (dateFrom, dateTo) => {
    if (dateFrom < dateTo) {
        [dateFrom, dateTo] = [dateTo, dateFrom];
    }
    const DateFromObj = DateTime.fromISO(dateFrom),
          DateToObj = DateTime.fromISO(dateTo);

    const diff =  DateFromObj.diff(DateToObj,['years', 'months', 'days']).toObject();   
    
    return diff;
}