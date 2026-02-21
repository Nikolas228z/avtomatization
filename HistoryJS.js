function page(username, describe){
   let forDiv = document.createElement("div");
   let forH2 = document.createElement("h2");
   let p = document.createElement("p");
    let button = document.createElement("button");

    button.textContent= ">";


    forDiv.classList.add("forDivHis");
    forDiv.appendChild(forH2);
    forH2.textContent = username;
    p.textContent = describe;
    forDiv.appendChild(button);
button.addEventListener("click", () =>changeColor(forDiv,button));
    forDiv.appendChild(p);
    let forSection = document.getElementById("mainSection");
    forSection.appendChild(forDiv);
}


function changeColor(e,button){
    e.style.backgroundColor = "green";
button.addEventListener("click", () =>changeOtherColor(e,button));

}
function changeOtherColor(v,button){
    v.style.backgroundColor = "yellow";
button.addEventListener("click", () =>changeColor(v,button));

}
const users = [
  { name: "Сторінка1", describe: 18 },
  { name: "Сторінка2", describe: 20 },
  { name: "Сторінка3", describe: 17 }
];

for(let i = 0;i<users.length;i+=1)
    {
         page(users[i].name, users[i].describe);
    }
