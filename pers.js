const users = [
    {
        id: 1,
        FirstName: "Тупиця",
        secondName: "Мар'яна",
        LastName: "Юрівна"
    },
    {
        id: 2,
        FirstName: "Андреєва",
        secondName: "Вікторія",
        LastName: "Іванівна"
    },
    {
        id: 3,
        FirstName: "Гера",
        secondName: "Едуард",
        LastName: "Васильович"
    },
    {
        id: 4,
        FirstName: "Андреєва",
        secondName: "Світлана",
        LastName: "Константинівна"
    },
    {
        id: 5,
        FirstName: "Іваніга",
        secondName: "Йосип",
        LastName: "Йосипович"
    }
];

console.log(users);

function openModal(data) {
    let FirstName = document.getElementById("boss1");
    let secondName = document.getElementById("boss2");
    let LastName = document.getElementById("boss3");
    let Window = document.getElementById("popupWindow");
    Window.style.display = "flex";
    const user = users.find((u) => u.id === data);
    FirstName.textContent = user.FirstName;
    secondName.textContent = user.secondName;
    LastName.textContent = user.LastName;
}
