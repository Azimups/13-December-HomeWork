let redbtn = document.querySelector(".red-button");
let bluebtn = document.querySelector(".blue-button");
let blackbtn = document.querySelector(".black-button");
let purplebtn = document.querySelector(".purple-button");
let redbx = document.querySelector(".red-box");
let bluebx = document.querySelector(".blue-box")
let blackbx = document.querySelector(".black-box")
let purplebx = document.querySelector(".purple-box")
redbtn.addEventListener("click",btnRed);
bluebtn.addEventListener('click',btnBlue);
blackbtn.addEventListener("click",btnBlack);
purplebtn.addEventListener("click",btnPurple);
function btnRed(){
    redbx.style.backgroundColor ="Red";
    bluebx.style.backgroundColor="white";
    blackbx.style.backgroundColor ="white";
    purplebx.style.backgroundColor ="white";
}
function btnBlue(){
    redbx.style.backgroundColor ="white";
    bluebx.style.backgroundColor ="Blue";
    blackbx.style.backgroundColor ="white";
    purplebx.style.backgroundColor ="white";
}
function btnBlack(){
    redbx.style.backgroundColor ="white";
    bluebx.style.backgroundColor ="white";
    blackbx.style.backgroundColor ="black";
    purplebx.style.backgroundColor ="white";
}
function btnPurple(){
    redbx.style.backgroundColor ="white";
    bluebx.style.backgroundColor ="white";
    blackbx.style.backgroundColor ="white";
    purplebx.style.backgroundColor ="purple";
}