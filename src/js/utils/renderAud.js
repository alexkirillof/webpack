// import {itemsAud} from './sourse.js';
const audios = document.querySelectorAll('.gallary-audio-item'),
      itemsAud = [
    {src:'../../sound/nature_sound1.mp3',title:'Звуки природы_1'},
    {src:'../../sound/nature_sound2.mp3',title:'Звуки природы_2'},
    {src:'../../sound/nature_sound3.mp3',title:'Звуки природы_3'},
  ];
function renderAud(){
    return itemsAud.forEach(a=>{
        audios.forEach((item,i)=>{
           item.innerHTML = `
           <audio controls src="${itemsAud[i].src}">
           </audio>
           <p>${itemsAud[i].title}</p>
           `  
          }) 
    })
}

export {renderAud};