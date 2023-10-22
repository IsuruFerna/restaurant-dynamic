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
   console.log("this is menu: ", data);

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
            // Pizze bianche
            if (element.type === "pizze bianche") {
               const pizzeBianche = document.getElementById("pizze-bianche");
               renderEachMenuItem(element, pizzeBianche);
            }
         }
         // render Sri Lankan menu
         if (obj === "sri_lankan") {
            // rice
            if (element.type === "rice") {
               const rice = document.getElementById("rice");
               renderEachMenuItem(element, rice);
            }
         }
      });
   }
});

// render menu item into DOM
function renderEachMenuItem(element, appendIn) {
   // const ingredient = ingredients(element);
   const eachItem = document.createElement("div");
   eachItem.classList.add("row", "row-cols-2", "text-light", "ps-3", "mb-3");
   eachItem.innerHTML = `
   <div class="col col-8">
      <p class="fs-6 mb-0 fw-bold">${element.name.toUpperCase()}</p>
      ${ingredients(element)}
   </div>
   <div class="col col-4 text-end ">
      <p class="fs-7">${element.price} €</p>
   </div>
   `;

   appendIn.children[0].appendChild(eachItem);
}

// render ingredints with a space
function ingredients(element) {
   let ingredient = [];

   // if there are not multiple arrays make a "<p></p>" tag as a string
   if (typeof element.ingredient[0] === "string") {
      element.ingredient.forEach((item) => {
         item = " " + item;
         ingredient.push(item);
      });

      return `<p class="fs-7 ps-2  mb-0 text-uppercase">${ingredient}</p>`;
   } else {
      // if there are multiple arrays make multiple "<p></p>" tags
      let ingredientInnerHTML = "";
      element.ingredient.forEach((arr, index) => {
         arr.forEach((item) => {
            item = " " + item;
            ingredient.push(item);
         });
         ingredientInnerHTML += `<p class="fs-7 ps-2 mb-0 text-uppercase">${ingredient}</p>`;
         ingredient = [];
      });
      return ingredientInnerHTML;
   }
}
