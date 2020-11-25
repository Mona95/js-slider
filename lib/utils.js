export function createLi() {
  return document.createElement("li");
}

export function createImg() {
  return document.createElement("img");
}

export function sliderItem(imgSrc) {
  let liElement = createLi(),
    imgElement = createImg();

  imgElement.src = imgSrc;
  liElement.appendChild(imgElement);

  return liElement;
}
