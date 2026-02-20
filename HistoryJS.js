function page(username, describe){
   let forDiv = document.createElement("div");
   let forH2 = document.createElement("h2");
   let p = document.createElement("p");
    let button = document.createElement("button");

    button.textContent= "---->";


    forDiv.classList.add("forDivHis");
    forDiv.appendChild(forH2);
    forH2.textContent = username;
    p.textContent = describe;
    forDiv.appendChild(button);

    forDiv.appendChild(p);
    let forSection = document.getElementById("mainSection");
    forSection.appendChild(forDiv);
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
