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
