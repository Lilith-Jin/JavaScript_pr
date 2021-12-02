// document.addEventListener("DOMContentLoaded",() => {
const taskInput = document.querySelector("#taskInput");
const todolist = document.querySelector("#todo_list");

taskInput.addEventListener("keydown",(e)=>{
  if (e.key==="Enter"){
    //1. 建立todo item
    const todo =document.createElement("div");
    console.log(e.target.value);//輸入框的值
    todo.innerText = e.target.value;
    todolist.appendChild(todo); 
    //2.消除
    e.target.value = "";
    }
  })
