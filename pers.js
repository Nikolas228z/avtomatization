const users = [
     {
          id: 1,
          FirstName: "Тупиця",
          secondName: "Мар'яна",
          LastName: "Юрівна",
          path: "avtomatization/Знімок екрана_4-10-2025_163632_vsc.msu.edu.ua.jpeg",
          roles: ["specialist"],
          subjects: ["Інформатика", "Основи програмування"],
          events: [
          {
               title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
               link: "pers1.html"
          },
          {
               title: "Розвиток академічної мобільності",
               link: "pers1.html"
          },
     ]
     },

     {
          id: 2,
          FirstName: "Андреєва",
          secondName: "Вікторія",
          LastName: "Іванівна",
          path: "avtomatization/Знімок екрана_4-10-2025_163515_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "golova"],
          subjects: [
               "Вступ до спеціальності",
               "Типові технологічні процеси",
               "Автоматизований електропривод",
               "Автоматизація технологічних процесів",
               "Комп’ютерно-інтегровані технології автоматичного управління",
               "Організація комп'ютерних мереж"
          ],
          events: [
          {
               title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
               link: "pers1.html"
          },
          {
               title: "Розвиток академічної мобільності",
               link: "pers1.html"
          },
               {
               title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів" ,
                    link:"pers1.html"
               },
               {
               title: "Гостьова лекція для студентів спеціальності 151" ,
                    link:"pers1.html"
               },
                {
               title: "Методичний семінар" ,
                    link:"pers1.html"
               },
                 {
               title: "Заняття-екскурсія з дисципліни «Вступ до спеціальності»" ,
                    link:"pers1.html"
               },
               {
               title: "Інтегроване заняття на ПрАТ «Гроно-Текс»" ,
                    link:"pers1.html"
               },
               {
               title: "Студентська науково-практична конференція" ,
                    link:"pers1.html"
               }
     ]
     },

     {
          id: 3,
          FirstName: "Гера",
          secondName: "Едуард",
          LastName: "Васильович",
          path: "avtomatization/Знімок екрана_4-10-2025_16361_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "vikladach"],
          subjects: [
               "Електротехніка та електричні вимірювання",
               "Основи метрології",
               "Електроніка, мікроелектроніка та схемотехніка",
               "Основи телемеханіки",
               "Системи та мережі зв'язку",
               "Телекомунікаційні та інформаційні мережі"
          ],
          events: [
               {
               title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів" ,
                    link:"pers1.html"
               },
               {
               title: "Всеукраїнський хакатон від МХП" ,
                    link:"pers1.html"
               },
                {
               title: "Гостьова лекція для студентів спеціальності 151" ,
                    link:"pers1.html"
               }

     ]
     },

     {
          id: 4,
          FirstName: "Андреєва",
          secondName: "Світлана",
          LastName: "Константинівна",
          path: "avtomatization/Знімок екрана_4-10-2025_163541_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "vikladach"],
          subjects: ["Теорія автоматичного регулювання (ТАР)"],
          events: [
               {
                    title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
                    link: "pers1.html"
               },
               {
                    title: "Розвиток академічної мобільності",
                    link: "pers1.html"
               },
                {
               title: "Гостьова лекція для студентів спеціальності 151" ,
                    link:"pers1.html"
               },
                {
               title: "Методичний семінар" ,
                    link:"pers1.html"
               },
                 {
               title: "Заняття-екскурсія з дисципліни «Вступ до спеціальності»" ,
                    link:"pers1.html"
               }
          ]
     },

     {
          id: 5,
          FirstName: "Іваніга",
          secondName: "Йосип",
          LastName: "Йосипович",
          path: "avtomatization/Знімок екрана_4-10-2025_163617_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "vikladach"],
          subjects: ["Теорія автоматичного регулювання (ТАР)"],
          events: [
               {
                    title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
                    link: "pers1.html"
               },
               {
                    title: "Розвиток академічної мобільності",
                    link: "pers1.html"
               },
                {
               title: "Гостьова лекція для студентів спеціальності 151" ,
                    link:"pers1.html"
               },
          ]
     }
];

function openModal(id) {
     const user = users.find((u) => u.id === Number(id));
     if (!user) return;

     const FirstName = document.getElementById("boss1");
     const secondName = document.getElementById("boss2");
     const LastName = document.getElementById("boss3");
     const img = document.getElementById("image");

     let gol = document.getElementById("golova");
     let spec = document.getElementById("specialist");
     let vik = document.getElementById("vikladach");

     let ul = document.getElementById("uli");
let uli =  document.getElementById("ulik");
     ul.innerHTML = "";
     uli.innerHTML = "";

     FirstName.textContent = user.FirstName;
     secondName.textContent = user.secondName;
     LastName.textContent = user.LastName;
     img.src = user.path;

     // предмети
     user.subjects.forEach((subject) => {
          let li = document.createElement("li");
          li.textContent = subject;
          ul.appendChild(li);
     });

     // ролі
     gol.style.display = "none";
     spec.style.display = "none";
     vik.style.display = "none";

     user.roles.forEach((role) => {
          document.getElementById(role).style.display = "block";
     });

     // події
    user.events.forEach((eventi) => {
       let li =  document.createElement("li");
         let a = document.createElement("a");
         li.appendChild(a);
         uli.appendChild(li);
         a.textContent= eventi.title;

    });

     document.getElementById("popupWindow").classList.add("active");
}

function closeModal() {
     document.getElementById("popupWindow").classList.remove("active");
}

document.getElementById("popupWindow").addEventListener("click", function (e) {
     if (e.target.id === "popupWindow") {
          closeModal();
     }
});
