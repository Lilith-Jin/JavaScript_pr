// const box = document.querySelector('.box');

//     box.addEventListener("click", (e) => {
//       console.log(123);
//     })
 $().ready(()=>{
   $(".box").on ("click",()=>{
    console.log(123);
   })
 })
// $().ready(()=>{
//   $(".box").click()
// })

$().ready(()=>{//確保每個元素都有載入

  $('.prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.jcarousel').jcarousel();
  
});




 