let today = new Date();
let DD = String(today.getDate()).padStart(2, '0');
let MM = String(today.getMonth() + 1).padStart(2, '0'); 
let YYYY = today.getFullYear();
let hh = today.getHours();
let mm = today.getMinutes();


let dateTags = document.getElementsByClassName('date');

for (date of dateTags) {
    date.innerText = 'Today is ' + MM + '/' + DD + '/' + YYYY + '. It is ' + hh + ':' + mm + '.';
}