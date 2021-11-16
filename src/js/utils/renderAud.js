import sound1 from '../../sound/nature_sound1.mp3';
import sound2 from '../../sound/nature_sound2.mp3';
import sound3 from '../../sound/nature_sound3.mp3';
const audios = document.querySelectorAll('.gallary-audio-item'),
      itemsAud = [
    {src:sound1,title:'Звуки природы_1'},
    {src:sound2,title:'Звуки природы_2'},
    {src:sound3,title:'Звуки природы_3'},
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