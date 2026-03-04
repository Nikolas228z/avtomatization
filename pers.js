const users = [
    {
        id: 1,
        FirstName: "Тупиця",
        secondName: "Мар'яна",
        LastName: "Юрівна",
        path :"avtomatization/Знімок екрана_4-10-2025_163632_vsc.msu.edu.ua.jpeg"
    },
    {
        id: 2,
        FirstName: "Андреєва",
        secondName: "Вікторія",
        LastName: "Іванівна",
         path :"avtomatization/Знімок екрана_4-10-2025_163515_vsc.msu.edu.ua.jpeg"
    },
    {
        id: 3,
        FirstName: "Гера",
        secondName: "Едуард",
        LastName: "Васильович",
         path :"avtomatization/Знімок екрана_4-10-2025_16361_vsc.msu.edu.ua.jpeg"
    },
    {
        id: 4,
        FirstName: "Андреєва",
        secondName: "Світлана",
        LastName: "Константинівна",
         path :"avtomatization/Знімок екрана_4-10-2025_163541_vsc.msu.edu.ua.jpeg"
    },
    {
        id: 5,
        FirstName: "Іваніга",
        secondName: "Йосип",
        LastName: "Йосипович",
         path :"avtomatization/Знімок екрана_4-10-2025_163617_vsc.msu.edu.ua.jpeg"
    }
];

console.log(users);

function openModal(data) {
    let FirstName = document.getElementById("boss1");
    let secondName = document.getElementById("boss2");
    let LastName = document.getElementById("boss3");
    let Window = document.getElementById("popupWindow");
    let img = document.getElementById("image");
    Window.style.display = "flex";
    const user = users.find((u) => u.id === data);
    FirstName.textContent = user.FirstName;
    secondName.textContent = user.secondName;
    LastName.textContent = user.LastName;
    img.src= user.path;
}
function closeModal() {
   document.getElementById("popupWindow").style.display = "none";
}