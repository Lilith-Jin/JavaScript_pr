

function randomHex() {
  return Math.floor(Math.random() * 16777215).toString(16).padStart(6,0);//padStart(幾位數,要補的數字);
}

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
console.log(btn);

container.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName == "BUTTON") {
    e.target.parentNode.remove();
  }
});

btn.addEventListener("click",() => {
  const color = randomHex();
  const el = document.createElement('div')
  el.innerText = '123';
  el.innerHTML = `#${color}`;
  el.style.backgroundColor = `#${color}`;
  
  container.insertAdjacentElement('afterbegin', el);

  const closeBtn = document.createElement("button");
    closeBtn.innerText = 'x';
    el.append(closeBtn);

    closeBtn.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
    })
  });