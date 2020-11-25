import { responsiveSlider } from "../../lib/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  const spanTag = (name) => "<img src='" + name + "'/><br/>";

  let dataTags = dataModule.products.map((product) => {
    return spanTag(product.image);
  });

  let slider = document.getElementById("slider");
  //slider.innerHTML = dataTags;

  responsiveSlider();
});
