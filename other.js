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

   // ✅ правильне підключення картинки
   if(pess){
       image.src = pess;
       image.style.width = "90%";
        image.style.display = "none";
       another.appendChild(image);
   }

   another.appendChild(forH2);
   another.appendChild(p);

   forDiv.classList.add("forDivHis");
   withDisFlx.classList.add("forAnother");
   button.classList.add("buton");

   forH2.textContent = username;
   p.textContent = describe;

   withDisFlx.appendChild(button);
   withDisFlx.appendChild(another);
   forDiv.appendChild(withDisFlx);

   // ✅ нормальний toggle без removeEventListener
   button.addEventListener("click", () => toggleAnim(forDiv, another, withDisFlx,image,forH2,p));

   let forSection = document.getElementById("mainSection");
   forSection.appendChild(forDiv);

   if (username == "Історія Автоматизації"){
        forH2.style.marginTop = "35%";
   }
}

function toggleAnim(e, another, withDisFlx,image,forH2,p){
    withZ++;

    if(e.classList.contains("leftAnimForMobile")){
        // назад
        e.classList.remove("leftAnimForMobile");
        e.classList.add("RightAnimForMobile");
        image.classList.remove("forREdo");
        image.classList.add("animWithOpasity");
        forH2.classList.remove("animWithOpasity");
        forH2.classList.add("forREdo");
        p.classList.remove("animWithOpasity");
        p.classList.add("forREdo");
        image.style.display ="none";
        withDisFlx.classList.remove("reverse");

    } else {
        // вперед
        e.classList.remove("RightAnimForMobile");
        e.classList.add("leftAnimForMobile");
        image.classList.remove("animWithOpasity");
        image.classList.add("forREdo");
        forH2.classList.remove("forREdo");
        forH2.classList.add("animWithOpasity");
        p.classList.remove("forREdo");
        p.classList.add("animWithOpasity");
        image.style.display ="inline-block";
        withDisFlx.classList.add("reverse");
    }

    e.style.zIndex = withZ;
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
