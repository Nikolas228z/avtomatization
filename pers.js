const users = [
     {
          id: 1,
          FirstName: "Тупиця",
          secondName: "Мар'яна",
          LastName: "Юрівна",
          path: "avtomatization/Знімок екрана_4-10-2025_163632_vsc.msu.edu.ua.jpeg",
          roles: ["specialist"],
          subjects: ["Інформатика", "Основи програмування"]
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
          ]
     },

     {
          id: 4,
          FirstName: "Андреєва",
          secondName: "Світлана",
          LastName: "Константинівна",
          path: "avtomatization/Знімок екрана_4-10-2025_163541_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "vikladach"],
          subjects: ["Теорія автоматичного регулювання (ТАР)"]
     },

     {
          id: 5,
          FirstName: "Іваніга",
          secondName: "Йосип",
          LastName: "Йосипович",
          path: "avtomatization/Знімок екрана_4-10-2025_163617_vsc.msu.edu.ua.jpeg",
          roles: ["specialist", "vikladach"],
          subjects: ["Теорія автоматичного регулювання (ТАР)"]
     }
];

function openModal(id) {
     const user = users.find((u) => u.id === Number(id));

     if (!user) return;
     document.getElementById("uli").innerHTML = "";

     const FirstName = document.getElementById("boss1");
     const secondName = document.getElementById("boss2");
     const LastName = document.getElementById("boss3");
     const img = document.getElementById("image");

     let gol = document.getElementById("golova");
     let spec = document.getElementById("specialist");
     let vik = document.getElementById("vikladach");

     let ul = document.getElementById("uli");

     FirstName.textContent = user.FirstName;
     secondName.textContent = user.secondName;
     LastName.textContent = user.LastName;
     img.src = user.path;

     user.subjects.forEach((subject) => {
          let li = document.createElement("li");
          li.textContent = subject;
          ul.appendChild(li);
     });

     gol.style.display = "none";
     spec.style.display = "none";
     vik.style.display = "none";

     user.roles.forEach((role) => {
          document.getElementById(role).style.display = "block";
     });

     user.subjects.forEach((subject) => {
          let li = document.createElement("li");
          li.textContent = subject;
          ul.appendChild(li);
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
