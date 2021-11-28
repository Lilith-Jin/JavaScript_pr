// document.addEventListener("DOMContentLoaded",function(){
  
const check = document.querySelectorAll(".checkbox");
console.log(check);
const btn = document.querySelector(".btn");

btn.addEventListener("click",(e) => {
  console.log(e.target)
  // e.preventDefault()
  check.forEach((x) => {
    x.checked = true;
    });
  });
// // }); 

const check = document.querySelectorAll(".checkbox");
// console.log(check);
const btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
  for (let a = 0; a < check.length; a++)
  check[a].checked = true
})
