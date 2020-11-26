import { responsiveSlider } from "../../lib/slider.js";
import { sliderItem, createArrows } from "../../lib/utils.js";

window.addEventListener("DOMContentLoaded", () => {
  let dataTags = dataModule.products.map((product) => {
    return sliderItem(product);
  });

  let rightArrow = "fas fa-angle-right",
    leftArrow = "fas fa-angle-left";

  let firstSlider = document.getElementById("first-slider"),
    secondSlider = document.getElementById("second-slider"),
    thirdSlider = document.getElementById("third-slider");

  [firstSlider, secondSlider, thirdSlider].forEach((slider) => {
    slider.classList.add("slider-container");
    slider.insertBefore(createArrows("prev", leftArrow), slider.firstChild);
    slider.insertBefore(createArrows("next", rightArrow), slider.firstChild);
  });

  let firstSliderItems = document.querySelector(".first-slider-items"),
    secondSliderItems = document.querySelector(".second-slider-items"),
    thirdSliderItems = document.querySelector(".third-slider-items");

  [
    firstSliderItems,
    secondSliderItems,
    thirdSliderItems,
  ].forEach((slideritem) => slideritem.classList.add("slider-items"));

  dataTags.forEach((tag) => firstSliderItems.appendChild(tag));

  let firstCopy = firstSliderItems.cloneNode(true),
    secondCopy = firstSliderItems.cloneNode(true);

  secondSliderItems.appendChild(firstCopy);
  thirdSliderItems.appendChild(secondCopy);

  [firstSlider, secondSlider, thirdSlider].map((slider) =>
    responsiveSlider(slider)
  );
});
