let v = document.querySelector(".front");
let w = document.querySelector(".rear");
let x = document.querySelector("body");
let flag =0;
v.addEventListener("click",() =>{
    flag++;
    if(flag%2===0)
    x.style.backgroundColor = "black";
    else 
    x.style.backgroundColor = "white";
})
