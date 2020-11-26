/**
 * Main Slider function in order to control the slider related functionalities
 *  based on the slider that is being passed to function, it gets rest of the related DOM
 * @param {*} slider
 */
export function responsiveSlider(slider) {
  let sliderWidth = slider.offsetWidth / 5;
  const sliderList = slider.querySelector("ul");
  let items = sliderList.querySelectorAll("li").length;
  let count = 1;
  let prev = slider.querySelector("#prev"),
    next = slider.querySelector("#next");

  //handling the size of slider while resizing window
  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  function prevSlide() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count == 1) {
      count = items - 1;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  }
  function nextSlide() {
    if (count < items) {
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count === items) {
      sliderList.style.left = "0px";
      count = 1;
    }
  }

  //Adding listener for arrows
  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);

  setInterval(function () {
    nextSlide();
  }, 3500);
}
