// const btn = document.querySelector(".btn");
// btn.addEventListener("click",(e) => {
//   console.log(e.checked = '123')
//    });

const btn = document.querySelector(".btn");
btn.addEventListener("click",() => {
  const el = document.createElement('div')
  el.innerText = 'hi';
  el.className = 'hi';
  const container = document.querySelector(".container");
  container.appendChild(el);
  });
  