/**
 * Utils.js Holds all the helper methods , to be used in other places.
 */

/**
 * Responsible to generate <li></li> element
 */
function createLi() {
  let liEl = document.createElement("li");
  liEl.className = "slider-item-wrapper";
  return liEl;
}

/**
 * Responsible to generate <img />
 * method receives a param to place image source inside the img tag
 * @param {} imgSrc
 */
function createImg(imgSrc) {
  let imgEl = document.createElement("img");
  imgEl.src = imgSrc;
  imgEl.height = 190;
  return imgEl;
}

/**
 * Responsible to generate <span></span>
 * method receives a param to place content
 * @param {} content
 */
function createSpan(content) {
  let spanEl = document.createElement("span");
  spanEl.innerHTML = content;
  return spanEl;
}

/**
 * Responsible to generate a simple <div></div> element
 */
function createDiv() {
  return document.createElement("div");
}

/**
 * Responsible to Generate right and left arrows for slider
 * according to the params , it generates related arrow
 * @param {} id
 * @param {*} icon
 */
export function createArrows(id, icon) {
  let aEl = document.createElement("a"),
    iEl = document.createElement("i");

  aEl.id = id;
  iEl.className = icon;
  aEl.appendChild(iEl);
  return aEl;
}

/**
 * Responsible to generate the category content,
 * category is being received as an array , so it needs to be modified
 * according to the design
 * @param {} categories
 */
function generateCategories(categories) {
  let productCategories = [...categories],
    spanEl = createSpan(productCategories.join(" | ")),
    divEl = createDiv();
  divEl.appendChild(spanEl);
  return divEl;
}

/**
 * Responsible to generate the title of each product
 * related class also has been added here
 * @param {*} title
 */
function generateTitle(title) {
  let spanEl = createSpan(title),
    divEl = createDiv();
  divEl.appendChild(spanEl);
  divEl.className = "product-title";
  return divEl;
}

/**
 * Responsible to generate the price content of the product
 * important : if the product has oldPrice, then the oldPrice content
 * will be attached to the price, otherwise only price will be displayed.
 * @param {*} price
 * @param {*} oldPrice
 */
function generatePrice(price, oldPrice) {
  let divEl = createDiv();

  price = `${price.toString().replace(".", ",")} €*`;
  let spanEl = createSpan(price);

  divEl.appendChild(spanEl);

  //considering oldPrice
  if (oldPrice) {
    oldPrice = `${oldPrice.toString().replace(".", ",")} €*`;
    let oldPriceSpan = createSpan(oldPrice);
    oldPriceSpan.className = "product-oldprice";
    divEl.appendChild(oldPriceSpan);
  }

  divEl.className = "product-price";

  return divEl;
}

/**
 * Responsible to check for basePrice of product and render
 * the related content
 * @param {*} basePrice
 */
function generateBasePrice(basePrice) {
  let divEl = createDiv(),
    spanEl = createSpan(basePrice);

  divEl.appendChild(spanEl);
  divEl.className = "product-baseprice";

  return divEl;
}

/**
 * Responsible to calculate the discount percentage
 * according to current price and old price
 * @param {*} price
 * @param {*} oldPrice
 */
function calculateDiscount(price, oldPrice) {
  return Math.round(((price - oldPrice) / oldPrice) * 100);
}

/**
 * Main Method to generate the DOM elements for each product item in slider
 * NOTE: the order of appending DOM elements is really important;
 * @param {*} productData
 */
export function sliderItem(productData) {
  //getting all the needed data from product object
  let { imageS, name, categories, price, oldPrice, params } = productData;
  //creating DOM elements
  let liEl = createLi(),
    productTitle = generateTitle(name),
    productImg = createImg(imageS),
    productCategories = generateCategories(categories),
    productPrice = generatePrice(price, oldPrice),
    productBasePrice = generateBasePrice(params.basePrice);

  productCategories.className = "product-categories";

  //Adding Discount Badge
  if (oldPrice) {
    let discountPercentage = calculateDiscount(price, oldPrice);
    liEl.setAttribute("data-discount", `${discountPercentage}%`);
    liEl.classList.add("slider-item-discount");
  }
  //Adding New Badge
  if (params.isNew === "true") {
    liEl.setAttribute("data-isnew", "NEW");
    liEl.classList.add("slider-item-new");
  }
  //Adding likeCount Badge
  if (params.likeCount.length > 0) {
    let likeCount = `♡ ${params.likeCount}`;
    liEl.setAttribute("data-likecount", likeCount);
    liEl.classList.add("slider-item-likecount");
  }

  //Creating Main Li element and appending child elements in order
  liEl.appendChild(productImg);
  liEl.appendChild(productTitle);
  categories.length > 0 && liEl.appendChild(productCategories);
  liEl.appendChild(productPrice);
  liEl.appendChild(productBasePrice);

  return liEl;
}
