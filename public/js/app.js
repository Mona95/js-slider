import { responsiveSlider } from "../../lib/slider.js";
import { sliderItem } from "../../lib/utils.js";

window.addEventListener("DOMContentLoaded", () => {
  let dataTags = dataModule.products.map((product) => {
    return sliderItem(product.image);
  });

  let sliderItems = document.getElementsByClassName("slider-items")[0];

  dataTags.forEach((tag) => sliderItems.appendChild(tag));

  responsiveSlider();
});
