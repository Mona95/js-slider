function createLi() {
  let liEl = document.createElement("li");
  liEl.className = "slider-item-wrapper";
  return liEl;
}

function createImg(imgSrc) {
  let imgEl = document.createElement("img");
  imgEl.src = imgSrc;
  imgEl.height = 190;
  return imgEl;
}

function createSpan(content) {
  let spanEl = document.createElement("span");
  spanEl.innerHTML = content;
  return spanEl;
}

function createBr() {
  return document.createElement("br");
}

function createDiv() {
  return document.createElement("div");
}

function generateCategories(categories) {
  let productCategories = [...categories],
    spanEl = createSpan(productCategories.join(" | ")),
    divEl = createDiv();
  divEl.appendChild(spanEl);
  return divEl;
}

export function sliderItem(productData) {
  let { imageS, name, categories } = productData;

  let liEl = createLi(),
    brEl = createBr(),
    spanEl = createSpan(name),
    imgEl = createImg(imageS),
    productCategories = generateCategories(categories);

  spanEl.className = "product-title";
  productCategories.className = "product-categories";

  liEl.appendChild(imgEl);
  liEl.appendChild(brEl);
  liEl.appendChild(spanEl);
  categories.length > 0 && liEl.appendChild(productCategories);

  return liEl;
}
