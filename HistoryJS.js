    let withZ = 150;

function page(username, describe, pess){
   let forDiv = document.createElement("div");
    let withDisFlx = document.createElement("div");
    let another = document.createElement("div");
   let forH2 = document.createElement("h2");
   let p = document.createElement("p");
    let button = document.createElement("button");
    let image = document.createElement("img");
    button.textContent= ">";
     image = pess;
    another.appendChild(forH2);
    forDiv.classList.add("forDivHis");
    forDiv.appendChild(withDisFlx);
    forH2.textContent = username;
    p.textContent = describe;
    withDisFlx.appendChild(button);
     withDisFlx.appendChild(another);
button.addEventListener("click", () =>oneAnim(forDiv,button,another,withDisFlx,pess));
    button.classList.add("buton");
    withDisFlx.classList.add("forAnother");
    another.appendChild(p);
    withDisFlx.style.display = "flex";
    let forSection = document.getElementById("mainSection");
    forSection.appendChild(forDiv);
}


function oneAnim(e,button,another,withDisFlx,pess){
    withZ+=1;
    e.style.zIndex = withZ;
    e.classList.remove("RightAnim");
    e.classList.add("leftAnim");
    another.classList.add("animWithOpasity");
another.classList.remove("forREdo");
    withDisFlx.style.flexDirection = "colum-reverse";
button.addEventListener("click", () =>twoAnim(e,button, another,withDisFlx,pess));
    button.removeEventListener("click",twoAnim);
    withZ+=1;
    e.style.zIndex = withZ;


}
function twoAnim(v,button, another,withDisFlx,pess){
    v.classList.remove("leftAnim");
      v.classList.add("RightAnim");
    another.classList.add("forREdo");
another.classList.remove("animWithOpasity");
    withDisFlx.style.flexDirection = "colum";
button.addEventListener("click", () =>oneAnim(v,button, another,withDisFlx,pess));
    button.removeEventListener("click",oneAnim);
       withZ-=1;
    v.style.zIndex = withZ;

}
const users = [
  { name: "5. Комп’ютеризація та робототехніка (друга половина XX ст.)", describe:  "Розвиток електроніки привів до появи програмованих логічних контролерів (PLC), що дозволили змінювати роботу обладнання без його заміни. У 60–70-х роках з’явилися промислові роботи, які виконували небезпечні й монотонні операції.",pess:" " },
  { name: "4. Автоматичні системи керування (середина XX ст.)", describe: "Із розвитком електротехніки з’явилися релейні, пневматичні й гідравлічні регулятори, які автоматично підтримували потрібні параметри. Це зменшило потребу в постійному нагляді та підвищило точність роботи машин.",pess:"avtomatization/5. Комп’ютеризація та робототехніка (друга половина XX ст.).avif" },
    { name: "3. Електрифікація та конвеєрні системи (початок XX ст.)", describe:  "Електродвигуни зробили обладнання компактнішим і ефективнішим. Конвеєр, запроваджений Генрі Фордом у 1913 році, значно прискорив виробництво: працівники виконували одну операцію, щопідвищило продуктивність і здешевило товари.",pess:"avtomatization/Автоматичні системи керування (середина XX ст.).webp  " },
    { name: "2. Початок індустріалізації (XIX ст.)", describe: "Промислова революція стала проривом: у виробництво прийшли парові двигуни й верстати, з’явилися фабрики, де машини виконували основну роботу, а люди лише керували ними. Це ознаменувало перехід до масового виробництва.",pess:"avtomatization/3. Електрифікація та конвеєрні системи (початок XX ст.).jpg" },
    { name: "1. Ручна праця та механізація (до XIX ст.)", describe: "На ранніх етапах виробництва люди працювали вручну, використовуючи прості механізми. Це було початком автоматизації, хоча машини все ще потребували постійної участі людини.",pess:"avtomatization/Знімок екрана 2025-10-02 083903.png " },
  { name: "Історія Автоматизації", pess:"avtomatization/ручна праця та механізація.jpg  " }
];

for(let i = 0;i<users.length;i+=1)
    {
         page(users[i].name, users[i].describe, users[i].pess);
    }
