// import {itemsImg} from './sourse.js';
const imgs = document.querySelectorAll('.gallary-img-item'),
      itemsImg = [
    {src:'img/1.jpg',title:'Природный лфндшафт_1',type:"imges"},
    {src:'img/2.jpg',title:'Природный лфндшафт_2',type:"imges"},
    {src:'img/3.jpg',title:'Природный лфндшафт_3',type:"imges"},
    {src:'img/nature.gif',title:'Природный лфндшафт_4',type:"gif"} 
]
function renderImg(){
    return itemsImg.forEach(i=>{
      if(i.type=="imges") { 
          imgs.forEach((item,i)=>{
           item.innerHTML = `
           <img src="${itemsImg[i].src}" alt="">
           <p>${itemsImg[i].title}</p>
           `  
          }) 
      }else if(i.type=="gif"){
       imgs.forEach((item,i)=>{
           item.innerHTML = `
           <img src="${itemsImg[i].src}" alt="">
           <p>${itemsImg[i].title}</p>
           `  
          }) 
      }
   })
   }

   export {renderImg};