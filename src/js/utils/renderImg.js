import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import gif1 from '../../img/nature.gif';
const imgs = document.querySelectorAll('.gallary-img-item'),
      itemsImg = [
    {src:img1,title:'Природный лфндшафт_1',type:"imges"},
    {src:img2,title:'Природный лфндшафт_2',type:"imges"},
    {src:img3,title:'Природный лфндшафт_3',type:"imges"},
    {src:gif1,title:'Природный лфндшафт_4',type:"gif"} 
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