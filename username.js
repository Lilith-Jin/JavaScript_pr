// document.addEventListener("DOMContentLoaded",function(){
//   const f = document.querySelector("#user_form");


//   f.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log('hi');
//     //如果沒寫username，不能走
//   })
// })

document.addEventListener("DOMContentLoaded",function(){
const form = document.querySelector(".user_form");

form.addEventListener("submit", (e) => {
  if (document.querySelector(".user_id").value === "") {
    e.preventDefault();//不換頁
    alert("填起乃");
    }
  })
})