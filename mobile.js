let zIndexCounter = 150;

function createCard(titleText, descriptionText, imagePath){
   let cardWrapper = document.createElement("div");
   let flexContainer = document.createElement("div");
   let contentBlock = document.createElement("div");
   let titleElement = document.createElement("h2");
   let descriptionElement = document.createElement("p");
   let buton = document.createElement("button");
   let imgElement = document.createElement("img");

   buton.textContent = ">";

   if(imagePath){
       imgElement.src = imagePath;
       imgElement.style.width = "90%";
       imgElement.style.display = "none";
       contentBlock.appendChild(imgElement);
   }

   contentBlock.appendChild(titleElement);
   contentBlock.appendChild(descriptionElement);

   cardWrapper.classList.add("MainTitlePage");
   flexContainer.classList.add("cardFlex");
   buton.classList.add("toggleBtn");

   titleElement.textContent = titleText;
   descriptionElement.textContent = descriptionText;

   flexContainer.appendChild(buton);
   flexContainer.appendChild(contentBlock);
   cardWrapper.appendChild(flexContainer);

   buton.addEventListener("click", () =>
       handleToggle(cardWrapper, contentBlock, flexContainer, imgElement, titleElement, descriptionElement)
   );

   let mainContainer = document.getElementById("mainSection");
   mainContainer.appendChild(cardWrapper);

   if (titleText == "Історія Автоматизації"){
        titleElement.style.marginTop = "35%";
   }
}

function handleToggle(e, contentBlock, flexContainer, imgElement, titleElement, descriptionElement){
    zIndexCounter++;

    if(e.classList.contains("animateForward")){
        e.classList.remove("animateForward");
        e.classList.add("animateBack");

        imgElement.classList.remove("fadeIn");
        imgElement.classList.add("fadeOut");

        titleElement.classList.remove("fadeOut");
        titleElement.classList.add("fadeIn");

        descriptionElement.classList.remove("fadeOut");
        descriptionElement.classList.add("fadeIn");

        imgElement.style.display ="none";
        flexContainer.classList.remove("reverseLayout");

    } else {
        e.classList.remove("animateBack");
        e.classList.add("animateForward");

        imgElement.classList.remove("fadeOut");
        imgElement.classList.add("fadeIn");

        titleElement.classList.remove("fadeIn");
        titleElement.classList.add("fadeOut");

        descriptionElement.classList.remove("fadeIn");
        descriptionElement.classList.add("fadeOut");

        imgElement.style.display ="inline-block";
        flexContainer.classList.add("reverseLayout");
    }

    e.style.zIndex = zIndexCounter;
}

const dataList = [
  { title: "5. Комп’ютеризація та робототехніка (друга половина XX ст.)", description: "Розвиток електроніки привів до появи програмованих логічних контролерів (PLC)...", image:" " },
  { title: "4. Автоматичні системи керування (середина XX ст.)", description: "Із розвитком електротехніки з’явилися релейні...", image:"avtomatization/5. Комп’ютеризація та робототехніка (друга половина XX ст.).avif" },
  { title: "3. Електрифікація та конвеєрні системи (початок XX ст.)", description: "Електродвигуни зробили обладнання компактнішим...", image:"avtomatization/Автоматичні системи керування (середина XX ст.).webp" },
  { title: "2. Початок індустріалізації (XIX ст.)", description: "Промислова революція стала проривом...", image:"avtomatization/3. Електрифікація та конвеєрні системи (початок XX ст.).jpg" },
  { title: "1. Ручна праця та механізація (до XIX ст.)", description: "На ранніх етапах виробництва люди працювали вручну...", image:"avtomatization/Знімок екрана 2025-10-02 083903.png" },
  { title: "Історія Автоматизації", image:"avtomatization/ручна праця та механізація.jpg" }
];

for(let i = 0; i < dataList.length; i++){
    createCard(dataList[i].title, dataList[i].description, dataList[i].image);
}
