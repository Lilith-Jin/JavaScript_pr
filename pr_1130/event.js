const wrap_div = document.querySelector(".container");
const out_div = document.querySelector(".box");
const in_div = document.querySelector(".item");


// out_div.addEventListener("click",()=>
//   {console.log("out clicked cap");
// },
//   true  
// );

// in_div.addEventListener("click",()=>
//   {console.log("in clicked bubble");
// },
  
// );

// out_div.addEventListener("click",()=>
//   {console.log("out clicked bubble");
// },
    
// );
wrap_div.addEventListener("click", (e)=> {
  e.stopPropagation();
  console.log("out"); 
});


out_div.addEventListener("click", (e)=> {
  e.stopPropagation();
  console.log("out"); 
});

in_div.addEventListener("click", (e)=> {
  console.log("in");
});