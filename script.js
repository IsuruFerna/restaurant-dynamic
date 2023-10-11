let rotation = 0;
let rotateBackWord = 0;

const holder = document.querySelector("#holder");
const slides = document.querySelectorAll(".rotate");
const nav = document.querySelector(".nav");
const opacityBefore = "1";
const opacityAfter = "0";

console.log("out side holder", holder);

const bgColor = function (opacity) {
   slides.forEach((element) => {
      element.style.transition = "opacity 1s ease-in-out";
      element.style.opacity = opacity;
   });
};

// rotate main
function rotate(rotation) {
   bgColor(opacityAfter);
   setTimeout(function () {
      bgColor(opacityBefore);
   }, 500);

   holder.style.transition = "transform 1s ease-in-out";
   holder.style.transform = `rotateY(${rotation}deg)`;
}

let btnsNav = document.querySelectorAll(".nav-link");
for (let i = 0; i < btnsNav.length; i++) {
   btnsNav[i].addEventListener("click", function () {
      console.log("clicked on: ", i);
      let rotation = 0;
      if (i === 0) {
         rotation = -120;
      } else if (i === 1) {
         rotation = 0;
      } else {
         rotation = 120;
      }
      rotate(rotation);
   });
}

document.addEventListener("click", (e) => {
   console.log(e.target);
});
