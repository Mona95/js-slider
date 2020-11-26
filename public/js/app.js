import { responsiveSlider } from "../../lib/slider.js";
import { sliderItem, createArrows } from "../../lib/utils.js";

window.addEventListener("DOMContentLoaded", () => {
  //Holds all the slider items which have been generate for each product object in dataModule
  let dataTags = dataModule.products.map((product) => {
    return sliderItem(product);
  });

  let rightArrow = "fas fa-angle-right",
    leftArrow = "fas fa-angle-left";

  //getting all the Sliders in the page
  let firstSlider = document.getElementById("first-slider"),
    secondSlider = document.getElementById("second-slider"),
    thirdSlider = document.getElementById("third-slider");

  //Appending classes and left&right arrows for sliders
  [firstSlider, secondSlider, thirdSlider].forEach((slider) => {
    slider.classList.add("slider-container");
    slider.insertBefore(createArrows("prev", leftArrow), slider.firstChild);
    slider.insertBefore(createArrows("next", rightArrow), slider.firstChild);
  });

  //getting ul element of each slider in order to append li elements
  let firstSliderItems = document.querySelector(".first-slider-items"),
    secondSliderItems = document.querySelector(".second-slider-items"),
    thirdSliderItems = document.querySelector(".third-slider-items");

  [
    firstSliderItems,
    secondSliderItems,
    thirdSliderItems,
  ].forEach((slideritem) => slideritem.classList.add("slider-items"));

  //appending dataTags to the first slider ul
  dataTags.forEach((tag) => firstSliderItems.appendChild(tag));

  //getting the copy of first slider items to be used for other two sliders
  let firstCopy = firstSliderItems.cloneNode(true),
    secondCopy = firstSliderItems.cloneNode(true);

  //append slider items'copy for the second and third slider
  secondSliderItems.appendChild(firstCopy);
  thirdSliderItems.appendChild(secondCopy);

  //apply responsiveSlider method for each slider to have functionalities for all
  [firstSlider, secondSlider, thirdSlider].map((slider) =>
    responsiveSlider(slider)
  );
});
