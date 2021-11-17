import vid1 from '../../video/Snowy.mp4';
import vid2 from '../../video/Sea.mp4';
import post1 from '../../video/Snowy.jpg';
import post2 from '../../video/Sea.jpg';

const videos = document.querySelectorAll('.gallary-video-item'),
      itemsVid = [
    {src:vid1,title:'Снега',poster:post1},
    {src:vid2,title:'Моря',poster:post2},
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