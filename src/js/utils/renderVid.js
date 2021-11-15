// import {itemsVid} from './sourse.js';
const videos = document.querySelectorAll('.gallary-video-item'),
      itemsVid = [
    {src:'video/Snowy.mp4',title:'Снега',poster:'video/Snowy.jpg'},
    {src:'video/Sea.mp4',title:'Моря',poster:'video/Sea.jpg'},
  ];
function renderVid(){
    return itemsVid.forEach(v=>{
        videos.forEach((item,i)=>{
           item.innerHTML = `
           <video width="350" controls poster="${itemsVid[i].poster}" type="video/mp4">
           <source src="${itemsVid[i].src}">
           </video>
           <p>${itemsVid[i].title}</p>
           `  
          }) 
    })
}

export {renderVid};