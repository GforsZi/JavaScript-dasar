const login = document
  .getElementById("itemL")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nama = document.getElementById("Lnama").value;
    var umur = document.getElementById("Lumur").value;
    var gender = document.getElementById("Lgender").value;

    let seseorang = { nama, umur, gender };

    console.log(seseorang);

    const N = document.getElementById("NAMA");
    const U = document.getElementById("UMUR");
    const G = document.getElementById("GENDER");

    N.innerText = nama;
    U.innerText = umur;
    G.innerText = gender;

    return;
  });

function deleteP() {
  let N = document.getElementById("NAMA");
  let U = document.getElementById("UMUR");
  let G = document.getElementById("GENDER");

  N.innerText = " ";
  U.innerText = " ";
  G.innerText = " ";
}
let delP = document.getElementById("delP");
delP.onclick = deleteP;

function Terang() {
  body.style.backgroundColor = "#ebf3e8";
  body.style.color = "black";

  let navbar = document.querySelector(".navhead");
  navbar.style.backgroundColor = "#b2c8ba";
  navbar.style.borderBottom = "1px solid #d2e3c8";

  let navbarA = document.querySelectorAll(".navhead button");
  navbarA.forEach((button) => {
    button.style.color = "aliceblue";
    button.style.backgroundColor = "#86a789";
  });
  let setw = document.querySelector(".setW");
  setw.style.backgroundColor = "#eaeaea";

  let JS = document.querySelector(".JS-1");
  JS.style.backgroundColor = "#eaeaea";

  let JSbtn = document.querySelectorAll(".JS-1 button");
  JSbtn.forEach((button) => {
    button.style.backgroundColor = "#86a789";
    button.style.color = "aliceblue";
  });

  let menu = document.querySelectorAll(".menuC button");
  menu.forEach((button) => {
    button.style.backgroundColor = "#86a789";
    button.style.color = "aliceblue";
  });

  let menubg = document.querySelector(".menuC");
  menubg.style.backgroundColor = "#eaeaea";

  let menuL = document.querySelector(".menuL");
  menuL.style.backgroundColor = "#eaeaea";

  let menuLl = document.querySelectorAll(".menuL input");
  menuLl.forEach((input) => {
    input.style.borderColor = "#86a789";
  });

  let menuLb = document.querySelector(".menuL button");
  menuLb.style.backgroundColor = "#b2c8ba";

  let profile = document.querySelector(".profile");
  profile.style.backgroundColor = "#eaeaea";

  let btnL = document.querySelector(".changeColor button");
  btnL.style.backgroundColor = "#e4c724";

  let btnD = document.querySelector(".changeColor button:nth-child(2)");
  btnD.style.backgroundColor = "#081f3b";

  let b2 = document.querySelector(".SJR-JS");
  b2.style.backgroundColor = "#eaeaea";

  let cJS = document.querySelector(".code-JS");
  cJS.style.backgroundColor = "#eaeaea";
}
let light = document.getElementById("Terang");
light.onclick = Terang;

function Gelap() {
  body.style.backgroundColor = "#2a2a2a";
  body.style.color = "#a2a2a2";

  let navbar = document.querySelector(".navhead");
  navbar.style.backgroundColor = "#1f1f1f";
  navbar.style.borderBottom = "1px solid #111111";

  let navbarA = document.querySelectorAll(".navhead button");
  navbarA.forEach((button) => {
    button.style.color = "#a2a2a2";
    button.style.backgroundColor = "#111111";
  });

  let setw = document.querySelector(".setW");
  setw.style.backgroundColor = "#1f1f1f";

  let JS = document.querySelector(".JS-1");
  JS.style.backgroundColor = "#1f1f1f";

  let JSbtn = document.querySelectorAll(".JS-1 button");
  JSbtn.forEach((button) => {
    button.style.backgroundColor = "#111111";
    button.style.color = "#a2a2a2";
  });

  let menu = document.querySelectorAll(".menuC button");
  menu.forEach((button) => {
    button.style.backgroundColor = "#111111";
    button.style.color = "#a2a2a2";
  });

  let menubg = document.querySelector(".menuC");
  menubg.style.backgroundColor = "#1f1f1f";

  let menuL = document.querySelector(".menuL");
  menuL.style.backgroundColor = "#1f1f1f";

  let menuLl = document.querySelectorAll(".menuL input");
  menuLl.forEach((input) => {
    input.style.borderColor = "#111111";
  });

  let menuLb = document.querySelector(".menuL button");
  menuLb.style.backgroundColor = "#1f1f1f";

  let profile = document.querySelector(".profile");
  profile.style.backgroundColor = "#1f1f1f";

  let btnL = document.querySelector(".changeColor button");
  btnL.style.backgroundColor = "#e4c724";

  let btnD = document.querySelector(".changeColor button:nth-child(2)");
  btnD.style.backgroundColor = "#081f3b";

  let b2 = document.querySelector(".SJR-JS");
  b2.style.backgroundColor = "#1f1f1f";

  let cJS = document.querySelector(".code-JS");
  cJS.style.backgroundColor = "#1f1f1f";
}
let dark = document.getElementById("Gelap");
dark.onclick = Gelap;

let jsText1 = document.getElementById("js1");
jsText1.innerText =
  "JavaScript adalah bahasa pemograman yang digunakan untuk membuat situs interaktif. Biasanya untuk menambahkan fungsional. Dan ini adalah bahasa serbaguna di browser web, server, dan juga mobile.";

let jsText2 = document.getElementById("js2");
jsText2.innerText =
  "Pada awalnya JavaScript dibuat dalam waktu 10 hari oleh Brendan Eich pada tahun 1995. Saat itu JavaScript diciptakan dengan nama Mocha yang kemudian diganti menjadi LiveScript sebelum dinamai JavaScript.";
function JS1() {
  let btnjs = document.querySelector(".JS-1");
  btnjs.classList.toggle("onX");
}
let js1 = document.getElementById("JS1");
js1.onclick = JS1;

function JS2() {
  let btnmn = document.querySelector(".menuC");
  btnmn.classList.toggle("onY");
}
let js2 = document.getElementById("JS2");
js2.onclick = JS2;

function MenuL() {
  let menul = document.querySelector(".menuL");
  menul.classList.toggle("onLogin");
}
let menuL = document.getElementById("MenuL");
menuL.onclick = MenuL;

function MenuP() {
  let menul = document.querySelector(".profile");
  menul.classList.toggle("onProfile");
}
let menuP = document.getElementById("MenuP");
menuP.onclick = MenuP;

function setW() {
  let setw = document.querySelector(".setW");
  setw.classList.toggle("onset");
}
let SetW = document.getElementById("setW");
SetW.onclick = setW;

function onB2() {
  let onB2 = document.querySelector(".SJR-JS");
  onB2.classList.add("onB2");
}
let OnB2 = document.getElementById("onB2");
OnB2.onclick = onB2;

function offB2() {
  let sjrJS = document.querySelector(".SJR-JS");
  sjrJS.classList.remove("onB2");
}
let OffB2 = document.getElementById("offB2");
OffB2.onclick = offB2;

function onCode() {
  let codeJS = document.querySelector(".code-JS");
  codeJS.classList.add("onCode");
}
let OnCode = document.getElementById("onCode");
OnCode.onclick = onCode;

function offCode() {
  let codeJS = document.querySelector(".code-JS");
  codeJS.classList.remove("onCode");
}
let OffCode = document.getElementById("offCode");
OffCode.onclick = offCode;
