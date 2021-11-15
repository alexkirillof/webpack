// import {itemsAud} from './sourse.js';
const audios = document.querySelectorAll('.gallary-audio-item'),
      itemsAud = [
    {src:'../../audio/nature_sound1.mp3',title:'Звуки природы_1'},
    {src:'../../audio/nature_sound2.mp3',title:'Звуки природы_2'},
    {src:'../../audio/nature_sound3.mp3',title:'Звуки природы_3'},
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