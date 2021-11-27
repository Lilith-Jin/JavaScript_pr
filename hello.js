document.addEventListener("DOMContentLoaded",function(){
  const btn = document.querySelector("#btn");


  btn.addEventListener("click", function(){
    const aa = document.getElementById('hi')
      aa.innerText = "World"
  })
})

//翻譯: 有一個叫btn的元素，當我執行click，會將hi元素改成World