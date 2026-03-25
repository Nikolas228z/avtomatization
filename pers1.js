const params = new URLSearchParams(window.location.search);

const title = params.get("title");
const userId = Number(params.get("user"));
const eventIndex = Number(params.get("event"));

// 🔥 заголовок
if (title) {
    document.title = title;
    document.getElementById("title").textContent = title;
}

const users = JSON.parse(localStorage.getItem("users"));
if (!users) return;

const user = users.find(u => u.id === userId);
if (!user) return;

const eventData = user.events[eventIndex];

if (!eventData) return;

document.getElementById("text").textContent = eventData.title;
document.getElementById("image").src = eventData.img || "photo.jpg";

// pers.js
const teachers = [
    {
        teacherId: 1,
        events: [
            {
                id: 1,
                title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
                text: `Студенти 2–4 курсів спеціальності «Електропостачання» ВСП «ВФК МДУ» продемонстрували високий рівень професійної підготовки та креативного мислення, взявши участь у хакатоні...
                Під час заходу учасники працювали над двома кейсами...`,
                photos: ["hackathon/photo1.jpg", "hackathon/photo2.jpg", "hackathon/photo3.jpg"]
            },
            {
                id: 2,
                title: "Розвиток академічної мобільності",
                text: `28 травня відбулася робоча зустріч представників двох провідних закладів фахової передвищої освіти...
                Серед основних напрямів співпраці...`,
                photos: ["mobility/photo1.jpg", "mobility/photo2.jpg", "mobility/photo3.jpg"]
            }
        ]
    },





    {
        teacherId: 2,
        events: [
               {
                id: 1,
                title: "Участь студентів у всеукраїнському міжуніверситетському хакатоні МХП",
                text: `Студенти 2–4 курсів спеціальності «Електропостачання» ВСП «ВФК МДУ» продемонстрували високий рівень професійної підготовки та креативного мислення, взявши участь у хакатоні...
                Під час заходу учасники працювали над двома кейсами...`,
                photos: ["hackathon/photo1.jpg", "hackathon/photo2.jpg", "hackathon/photo3.jpg"]
            },
            {
                id: 2,
                title: "Розвиток академічної мобільності",
                text: `28 травня відбулася робоча зустріч представників двох провідних закладів фахової передвищої освіти...
                Серед основних напрямів співпраці...`,
                photos: ["mobility/photo1.jpg", "mobility/photo2.jpg", "mobility/photo3.jpg"]
            }
        ]
    },
            {
                id: 3,
                title: "Вступ до спеціальності",
                text: `Заняття-екскурсія з дисципліни «Вступ до спеціальності» студентів 1-го курсу спеціальності 174 Автоматизація, комп’ютерно-інтегровані технології та робототехніка на ПрАТ «Гроно-Текс»...
                Студенти ознайомились з структурою підприємства та обладнанням...`,
                photos: [
                    "intro/photo1.jpg", "intro/photo2.jpg", "intro/photo3.jpg",
                    "intro/photo4.jpg", "intro/photo5.jpg", "intro/photo6.jpg",
                    "intro/photo7.jpg", "intro/photo8.jpg", "intro/photo9.jpg",
                    "intro/photo10.jpg"
                ]
            },
             {
                id: 3,
                title: "Вступ до спеціальності",
                text: `Заняття-екскурсія з дисципліни «Вступ до спеціальності» студентів 1-го курсу спеціальності 174 Автоматизація, комп’ютерно-інтегровані технології та робототехніка на ПрАТ «Гроно-Текс»...
                Студенти ознайомились з структурою підприємства та обладнанням...`,
                photos: [
                    "intro/photo1.jpg", "intro/photo2.jpg", "intro/photo3.jpg",
                    "intro/photo4.jpg", "intro/photo5.jpg", "intro/photo6.jpg",
                    "intro/photo7.jpg", "intro/photo8.jpg", "intro/photo9.jpg",
                    "intro/photo10.jpg"
                ]
            },
             {
                id: 3,
                title: "Вступ до спеціальності",
                text: `Заняття-екскурсія з дисципліни «Вступ до спеціальності» студентів 1-го курсу спеціальності 174 Автоматизація, комп’ютерно-інтегровані технології та робототехніка на ПрАТ «Гроно-Текс»...
                Студенти ознайомились з структурою підприємства та обладнанням...`,
                photos: [
                    "intro/photo1.jpg", "intro/photo2.jpg", "intro/photo3.jpg",
                    "intro/photo4.jpg", "intro/photo5.jpg", "intro/photo6.jpg",
                    "intro/photo7.jpg", "intro/photo8.jpg", "intro/photo9.jpg",
                    "intro/photo10.jpg"
                ]
            },









    {
        teacherId: 3,
        events: [
            {
                id: 5,
                title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів",
                text: `На початку грудня 2025 року відбувся захист курсових проєктів студентів 4-го курсу спеціальності 151 «Автоматизація та комп’ютерно-інтегровані технології»...
                Під час захисту студенти продемонстрували вміння застосовувати теоретичні знання у практичних умовах...`,
                photos: [
                    "projects/photo1.jpg", "projects/photo2.jpg", "projects/photo3.jpg",
                    "projects/photo4.jpg", "projects/photo5.jpg", "projects/photo6.jpg",
                    "projects/photo7.jpg", "projects/photo8.jpg", "projects/photo9.jpg",
                    "projects/photo10.jpg"
                ]
            }
        ]
    },





     {
        teacherId: 4,
        events: [
            {
                id: ,
                title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів",
                text: `На початку грудня 2025 року відбувся захист курсових проєктів студентів 4-го курсу спеціальності 151 «Автоматизація та комп’ютерно-інтегровані технології»...
                Під час захисту студенти продемонстрували вміння застосовувати теоретичні знання у практичних умовах...`,
                photos: [
                    "projects/photo1.jpg", "projects/photo2.jpg", "projects/photo3.jpg",
                    "projects/photo4.jpg", "projects/photo5.jpg", "projects/photo6.jpg",
                    "projects/photo7.jpg", "projects/photo8.jpg", "projects/photo9.jpg",
                    "projects/photo10.jpg"
                ]
            }
        ]
    },







     {
        teacherId: 5,
        events: [
            {
                id: ,
                title: "Актуальні технічні рішення та професійні компетентності: захист курсових проєктів",
                text: `На початку грудня 2025 року відбувся захист курсових проєктів студентів 4-го курсу спеціальності 151 «Автоматизація та комп’ютерно-інтегровані технології»...
                Під час захисту студенти продемонстрували вміння застосовувати теоретичні знання у практичних умовах...`,
                photos: [
                    "projects/photo1.jpg", "projects/photo2.jpg", "projects/photo3.jpg",
                    "projects/photo4.jpg", "projects/photo5.jpg", "projects/photo6.jpg",
                    "projects/photo7.jpg", "projects/photo8.jpg", "projects/photo9.jpg",
                    "projects/photo10.jpg"
                ]
            }
        ]
    },
];

export default teachers;
