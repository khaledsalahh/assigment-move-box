// let ar = [0, "m", "fg", "er", 2, 4, 3];

// let user = {
//   name: "ahmed",
//   age: 20,
//   phone: ["010", "011"],
// };

// let a = "ahmed";
// let b = "khaled";
// let c = 5;
// console.log(c++);
// console.log(c++);
// console.log(c);
///////////////////////
// let user = {
//   username: "ahmed",
//   age: 30,
//   addres: "cario",
// };
// user.username === "ahmed" && user.age > 18
//   ? (document.body.textContent = `welcome  ${user.username}`)
//   : "";
///////////////
// let num1 = 10;
// let num2 = 20;
// let sign = "*";
// switch (sign) {
//   case "+":
//     console.log(num1 + num2);
//     break;

//   case "-":
//     console.log(num2 - num1);
//     break;
//   case "*":
//     console.log(num1 * num2);
// }
const namee = ["ahmed", "khaled", "ismalil", "omar", "hady", "lolo"];
// let a = 0;
// while (a < namee.length) {
//   console.log(namee[a]);
//   a++;
// }
// for (let i = 0; i < namee.length; i++) {
//   console.log(namee[i]);
// }
// const user = [
//   {
//     username: "ahmed",
//     age: 20,
//     addres: "cairo",
//   },
//   {
//     username: "khaled",
//     age: 10,
//     addres: true,
//   },
//   {
//     username: "ibrahim",
//     age: 30,
//     addres: "cairo",
//   },
//   {
//     username: "shady",
//     age: 30,
//     addres: "cairo",
//   },
// ];
///////////////
// function number(x) {
//   let max = Math.max(...x);
//   let min = Math.min(...x);
//   return `Max element= ${max}\nMin element= ${min}
//   `;
// }

// console.log(number([2, 5, 10]));
//////////////////////

// const names = ["Ahmed", "mohammed", "Omar", "Ali", "Amr", "Hady"];

// console.log(names[Math.round(Math.random() * names.length)]);

///////////////////
// const x = document.querySelector(".container");
// let b = document.createElement("div");
// let c = document.createElement("div");
// c.classList.add("yellow");
// b.classList.add("red");
// x.append(b);
// x.append(c);
////////////////////////////
// let a = document.getElementsByTagName("button")[0];
// let b = document.querySelector(".container");
// console.log(b);
// a.addEventListener("click", () => {
//   b.classList.toggle("red");
// });
//////////////
// let a = document.querySelectorAll("div");

// let s = document.getElementsByTagName("section")[0];
// for (let i = 0; i < a.length; i++) {
//   a[i].addEventListener("click", () => {
//     console.log(a[i].classList[0]);
//   });
// }
///////////////////
// let box = document.querySelector(".box");

// box.addEventListener("click", () => {
//   const randomColor = "#" + Math.floor(Math.random() * 10000);
//   box.style.backgroundColor = randomColor;
// });
/////////////
// let input1 = document.querySelectorAll("input")[0];
// let input2 = document.querySelectorAll("input")[1];
// let nav = document.querySelector("nav");

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   nav.innerHTML = +input1.value + +input2.value;
// });
let box = document.querySelector("div");
let Top = 0;
let left = 0;

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowRight":
      left += 20;
      box.style.left = left + "px";

      break;
    case "ArrowLeft":
      left -= 20;
      box.style.left = left + "px";

      break;
    case "ArrowDown":
      Top += 20;
      box.style.top = Top + "px";

      break;
    case "ArrowUp":
      Top -= 20;
      box.style.top = Top + "px";

      break;
  }
});
