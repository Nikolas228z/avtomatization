let butonOne = document.getElementById("pageOne");
let butonTwo = document.getElementById("pageTwo");
 let reTaxt = document.getElementById("titleOfbook");
butonOne.addEventListener("click",  e => {
    ChangingLeft(e.target);
});
butonTwo.addEventListener("click", ChangingLeft);





function ChangingLeft(e1){
 let changLeft = document.getElementById("pageOne");
    let taxt = document.getElementById("titleOfbook");
    taxt.classList.add("titleOfBook");
    changLeft.classList.add("turned");
    e1.removeEventListener("click", ChangingLeft);
    e1.addEventListener("click", forChangeInRight);
}
function changingRight(n){
    let changRight = document.getElementById("pageTwo");
   // let changRightTwo = document.getElementById("pageTree");
     let InSecPage = document.getElementById("allTextInSecPage");
  //   let InThirtPage = document.getElementById("allTextInThirtPage");
    InSecPage.classList.add("titleOfBook");
  //  InThirtPage.classList.add("titleOfBook");
    changRight.classList.add("turnedTwo");
   // changRightTwo.classList.add("turnedTwo");
}
function forChangeInRight(){
    let changLeft = document.getElementById("pageOne");
    let taxt = document.getElementById("titleOfbook");
    taxt.classList.add("returnOne");
    changLeft.classList.remove("turned");
    changLeft.classList.add("returnedd");
}
