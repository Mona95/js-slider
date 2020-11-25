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

function generateTitle(title) {
  let spanEl = createSpan(title),
    divEl = createDiv();
  divEl.appendChild(spanEl);
  divEl.className = "product-title";
  return divEl;
}

function generatePrice(price, oldPrice) {
  let divEl = createDiv();

  price = `${price.toString().replace(".", ",")} €*`;
  let spanEl = createSpan(price);

  divEl.appendChild(spanEl);

  if (oldPrice) {
    oldPrice = `${oldPrice.toString().replace(".", ",")} €*`;
    let oldPriceSpan = createSpan(oldPrice);
    oldPriceSpan.className = "product-oldprice";
    divEl.appendChild(oldPriceSpan);
  }

  divEl.className = "product-price";

  return divEl;
}

function generateBasePrice(basePrice) {
  let divEl = createDiv(),
    spanEl = createSpan(basePrice);

  divEl.appendChild(spanEl);
  divEl.className = "product-baseprice";

  return divEl;
}

function calculateDiscount(price, oldPrice) {
  return Math.round(((price - oldPrice) / oldPrice) * 100);
}

export function sliderItem(productData) {
  let { imageS, name, categories, price, oldPrice, params } = productData;

  let liEl = createLi(),
    productTitle = generateTitle(name),
    productImg = createImg(imageS),
    productCategories = generateCategories(categories),
    productPrice = generatePrice(price, oldPrice),
    productBasePrice = generateBasePrice(params.basePrice);

  productCategories.className = "product-categories";

  if (oldPrice) {
    let discountPercentage = calculateDiscount(price, oldPrice);
    liEl.setAttribute("data-discount", `${discountPercentage}%`);
    liEl.classList.add("slider-item-discount");
  }

  liEl.appendChild(productImg);
  liEl.appendChild(productTitle);
  categories.length > 0 && liEl.appendChild(productCategories);
  liEl.appendChild(productPrice);
  liEl.appendChild(productBasePrice);

  return liEl;
}
