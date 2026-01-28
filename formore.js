let photo = document.getElementById("photoavtomatization");
let first = document.getElementById("divfirst");
let first1 = document.getElementById("divfirst1");

let bound = photo.getBoundingClientRect();

const topimg = bound.top + window.scrollY;
const bottomimg = bound.bottom + window.scrollY;

console.log(topimg);
console.log(bottomimg);
first.style.bottom = topimg + "px";
first1.style.top = bottomimg +"px" ;
