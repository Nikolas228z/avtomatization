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
                    title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП"
               },
               {
                    title: "Розвиток академічної мобільності"
               }
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
               { title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП" },
               { title: "Розвиток академічної мобільності" },
               { title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів" },
               { title: "Гостьова лекція для студентів спеціальності 151" },
               { title: "Методичний семінар" },
               { title: "Заняття-екскурсія з дисципліни «Вступ до спеціальності»" },
               { title: "Інтегроване заняття на ПрАТ «Гроно-Текс»" },
               { title: "Студентська науково-практична конференція" }
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
                    title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів",
                    link: "pers1.html"
               },
               { title: "Всеукраїнський хакатон від МХП", link: "pers1.html" },
               { title: "Гостьова лекція для студентів спеціальності 151", link: "pers1.html" }
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
               { title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП", link: "pers1.html" },
               { title: "Розвиток академічної мобільності", link: "pers1.html" },
               { title: "Гостьова лекція для студентів спеціальності 151", link: "pers1.html" },
               { title: "Методичний семінар", link: "pers1.html" },
               { title: "Заняття-екскурсія з дисципліни «Вступ до спеціальності»", link: "pers1.html" }
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
               { title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП", link: "pers1.html" },
               { title: "Розвиток академічної мобільності", link: "pers1.html" },
               { title: "Гостьова лекція для студентів спеціальності 151", link: "pers1.html" }
          ]
     }
];

// 🔥 зберігаємо users
localStorage.setItem("users", JSON.stringify(users));

function openModal(id) {
     const user = users.find((u) => u.id === Number(id));
     if (!user) return;

     const FirstName = document.getElementById("boss1");
     const secondName = document.getElementById("boss2");
     const LastName = document.getElementById("boss3");
     const img = document.getElementById("image");

     let ul = document.getElementById("uli");
     let uli = document.getElementById("ulik");

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

     // 🔥 події з переходом
     user.events.forEach((eventi, index) => {
          let li = document.createElement("li");
          let a = document.createElement("a");

          a.href = `pers1.html?user=${user.id}&event=${index}&title=${encodeURIComponent(eventi.title)}`;
          a.textContent = eventi.title;

          li.appendChild(a);
          uli.appendChild(li);
     });

     document.getElementById("popupWindow").classList.add("active");
}

function closeModal() {
     document.getElementById("popupWindow").classList.remove("active");
}
// Дані події
const event1 = {
     title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
     text: "Студенти 2–4 курсів спеціальності «Електропостачання» ВСП «ВФК МДУ» продемонстрували високий рівень професійної підготовки та креативного мислення, взявши участь у хакатоні, присвяченому вирішенню актуальних технічних проблем, які стосуються сучасної енергетики  та промисловості.Під час заходу учасники працювали над двома кейсами, які стосувалися реальних виробничих ситуацій:1. Проблема важкого пуску двигунів компресорних агрегатів на виробництві. Студенти аналізували причини надмірного навантаження на електромережу під час запуску потужних електродвигунів, розглядали можливі технічні рішення щодо пом’якшення пускових режимів, включаючи застосування струмообмежувальних реакторів та плавних пускових пристроїв.2. Забезпечення безперебійного енергопостачання в умовах відключення зовнішнього живлення. Особлива увага приділялася питанню балансування між генерацією та споживанням електричної енергії у внутрішній системі електропостачання підприємства, позаяк за умовами завдання деякі споживачі електроенергії не могли залишатись без електропостачання більше 20 хв. Учасники опрацьовували концепції автоматизованого керування навантаженнями, інтеграції резервних джерел живлення та оптимізації енергетичних потоків.Під час роботи над кейсами студенти отримували фахові консультації та підтримку викладачів спеціальних дисциплін Михайла ЛІСІЦКІ голови циклової комісії Євгенія ЧУТОРА та завідувач відділення Андрій ТОВТ, які спрямовували дослідницький пошук та допомагали структурувати технічні рішення.За активну участь у хакатоні всі студенти були відзначені сертифікатами а ВСП «ВФК МДУ» подякою, що підтверджують їх залучення до командної інженерної роботи над сучасними виробничими завданнями.",
     photos: ["avtomatization/photo1.jpg", "avtomatization/photo2.jpg", "avtomatization/photo3.jpg"]
};

// Функція для рендерингу
function renderEvent(eventData, containerId) {
     const container = document.getElementById(containerId);
     if (!container) return;

     container.querySelector(".event-title").textContent = eventData.title;
     container.querySelector(".event-text").textContent = eventData.text;

     const photosDiv = container.querySelector(".event-photos");
     photosDiv.innerHTML = ""; // очистити
     eventData.photos.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          photosDiv.appendChild(img);
     });
}

// Викликаємо функцію
renderEvent(event1, "event1");

// Подія з HTML-текстом
const event2 = {
    title: "Розвиток академічної мобільності",
    text: `
<div>
  <p>28 травня відбулася робоча зустріч представників двох провідних закладів фахової передвищої освіти,
  під час якої обговорювалися ключові аспекти впровадження внутрішньої академічної мобільності.</p>

  <p>У зустрічі взяли участь:<br>
  • Іваніга Йосип Йосипович — директор ВСП «Виноградівський фаховий коледж МДУ»;<br>
  • Рудь Ніна Андріївна — директор ВСП «Роменський фаховий коледж КНЕУ імені Вадима Гетьмана».</p>

  <p>Також були присутні представники адміністрацій обох навчальних закладів.</p>

  <p>У межах перемовин сторони досягли домовленостей щодо укладення договору про співпрацю,
  який визначає чіткі механізми реалізації академічної мобільності між закладами.
  Особливу увагу було приділено формуванню сприятливих умов для тимчасового навчання студентів у партнерському коледжі,
  підвищенню кваліфікації викладачів, спільній розробці навчальних програм та обміну передовим педагогічним досвідом.</p>

  <p>Серед основних напрямів співпраці:<br>
  • організація академічних обмінів студентів і викладачів;<br>
  • створення спільних освітніх ініціатив та міжінституційних проєктів;<br>
  • підтримка професійного розвитку через співпрацю, діалог і впровадження інноваційних підходів.</p>

  <p>Це партнерство — не лише формальний крок, а стратегічна ініціатива, що сприятиме формуванню відкритого освітнього простору,
  посиленню якості навчального процесу та розширенню можливостей для учасників освітнього середовища.</p>

  <p>Стежте за нашими новинами — попереду ще багато нових ініціатив, цікавих подій і прикладів ефективної співпраці в освіті!</p>
</div>
`,
    photos: [
        "mobility/photo1.jpg",
        "mobility/photo2.jpg",
        "mobility/photo3.jpg"
    ]
};

// Функція рендерингу події
function renderEvent(event, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Заголовок
    const titleEl = document.createElement("h2");
    titleEl.textContent = event.title;
    container.appendChild(titleEl);

    // Текст (HTML)
    const textEl = document.createElement("div");
    textEl.innerHTML = event.text;  // тут HTML зберігається як є
    container.appendChild(textEl);

    // Фото
    const photosEl = document.createElement("div");
    photosEl.classList.add("photos-container");
    event.photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = event.title;
        photosEl.appendChild(img);
    });
    container.appendChild(photosEl);
}

// Викликаємо рендер
renderEvent(event2, "event2");
