let rotation = 0;

const holder = document.querySelector("#holder");
const slides = holder.querySelectorAll(".rotate");
const colorBefore = `rgba(255, 255, 0, 1)`;
const colorAfter = `rgba(255, 255, 0, 0)`;
const opacityBefore = "1";
const opacityAfter = "0";

const bgColor = function (opacity) {
   slides.forEach((element) => {
      // element.style.transition = "background-color .8s ease-in-out";
      element.style.transition = "opacity 1s cubic-bezier(.17,.67,.83,.67)";
      // element.style.backgroundColor = color;
      element.style.opacity = opacity;
   });
};

// rotate main
function rotate() {
   rotation += 120;

   bgColor(opacityAfter);
   setTimeout(function () {
      bgColor(opacityBefore);
   }, 250);

   holder.style.transition = "transform 1s cubic-bezier(.17,.67,.83,.67)";
   holder.style.transform = `rotateY(${rotation}deg)`;
}
