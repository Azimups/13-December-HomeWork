let sidebr = document.querySelector(".side-bar")
let button = document.querySelector(".btn")
sidebr.addEventListener("click",sideBar);
function sideBar(){
    sidebr.style.width = "350px";
    button.style.marginLeft = "350px";
}