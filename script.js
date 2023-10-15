import { menu_data } from "./menu.js";

document.addEventListener("DOMContentLoaded", function () {
   const holder = document.querySelector("#holder");
   const slides = document.querySelectorAll(".rotate");
   const nav = document.querySelector(".nav");
   const opacityBefore = "1";
   const opacityAfter = "0";

   // change the opacity of BG when it rotates
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

   // main nav which rorates when clicks
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

   // load menu as JSON so lately I can use data via API
   const data = JSON.parse(menu_data);

   // itterate through main menu (Pizza, Sri Lankan, Bibite...)
   for (let obj in data) {
      data[obj].forEach((element) => {
         // render menu pizza
         if (obj === "pizza") {
            // Pizze classiche
            if (element.type === "classiche") {
               const leClassiche = document.getElementById("le-classiche");
               renderEachMenuItem(element, leClassiche);
            }
         }
      });
   }
});

function renderEachMenuItem(element, appendIn) {
   const ingredient = element.ingredient;
   const eachItem = document.createElement("div");
   eachItem.classList.add("row", "row-cols-2", "text-light");
   eachItem.innerHTML = `
   <div class="col col-9">
      <p class="fs-6 mb-0">${element.name.toUpperCase()}</p>
      <p class="fs-7 ps-2 text-uppercase">
         ${ingredient}
      </p>
   </div>
   <div class="col col-3 text-end ">
      <p class="fs-5">${element.price} €</p>
   </div>
   `;

   appendIn.children[0].appendChild(eachItem);
}
