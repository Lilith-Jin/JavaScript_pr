const out_div = document.querySelector(".box");
const in_div = document.querySelector(".item");


out_div.addEventListener("click",()=>
  {console.log("out clicked cap");
},
  true  
);

in_div.addEventListener("click",()=>
  {console.log("in clicked bubble");
},
  
);

out_div.addEventListener("click",()=>
  {console.log("out clicked bubble");
},
    
);


// out_div.addEventListener("click", (e)=> {
//   e.stopPropagation();
//   console.log("out"); 
// });

// in_div.addEventListener("click", (e)=> {
//   console.log("in");
// });