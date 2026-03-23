let button = document.getElementById("button");
let div = document.getElementById("stickyWindow");
function stickyWindow() {
    div.style.display = "none";
    timer = setInterval(() => {
    div.style.display = "block";
    clearInterval(timer); }, 15000);
}
