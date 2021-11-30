const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click",() => {
  const el = document.createElement('div')
  el.innerText = '123';
  el.className = 'hi';
  
  container.insertAdjacentElement('afterbegin', el);

  const closeBtn = document.createElement("button");
    closeBtn.innerText = 'x';
    el.append(closeBtn);

    closeBtn.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
    })
  });
  