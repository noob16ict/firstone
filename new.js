const URL = "https://cat-fact.herokuapp.com/facts";
let f = document.querySelector(".msg");
let b = document.querySelector(".btn");

const getFacts = async () =>{
  console.log("getting data...");
  let response = await fetch(URL);
  let data = await response.json();
  f.innerText = data[0].text;
};
b.addEventListener("click",getFacts);