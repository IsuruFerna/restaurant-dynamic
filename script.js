let rotation = 0;
let rotateBackWord = 0;

const holder = document.querySelector("#holder");
const slides = holder.querySelectorAll(".rotate");
const nav = holder.querySelector(".nav");
const colorBefore = `rgba(255, 255, 0, 1)`;
const colorAfter = `rgba(255, 255, 0, 0)`;
const opacityBefore = "1";
const opacityAfter = "0";

const bgColor = function (opacity) {
   slides.forEach((element) => {
      // element.style.transition = "background-color .8s ease-in-out";
      element.style.transition = "opacity 1s ease-in-out";
      // element.style.backgroundColor = color;
      element.style.opacity = opacity;
   });
};

// rotate main
function rotate(rotation) {
   // console.log("this is target: ", event.target);
   // rotation += 120;
   // rotateBackWord -= 120;

   bgColor(opacityAfter);
   setTimeout(function () {
      bgColor(opacityBefore);
   }, 500);

   holder.style.transition = "transform 1s ease-in-out";
   holder.style.transform = `rotateY(${rotation}deg)`;
   // nav.style.transition = "transform 1s ease-in-out";
   // nav.style.transform = `translate3d(0, 0, 3em) rotateY(${rotateBackWord}deg)`;
}

let btnsNav = document.querySelectorAll(".nav-link");
console.log(btnsNav);
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
