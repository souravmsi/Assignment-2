const productsData = [
  {
    productId: "87729300",
    img: {
      src: "./static/1.jpg",
      alt: "Apple iphone 14 pro",
    },
    name: "Apple iphone 14 128GB 5G Midnight",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 80,999.00/piece",
  },

  {
    productId: "87729301",
    img: {
      src: "./static/2.jpg",
      alt: "Realme Narzo N55",
    },
    name: "realme narzo N55 (Prime Black, 6GB+128GB)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 12,999.00/piece",
  },

  {
    productId: "87729302",
    img: {
      src: "./static/3.jpg",
      alt: "OnePlus 11 5G",
    },
    name: "OnePlus 11 5G (Eternal Green, 8GB RAM, 128GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 56,999.00/piece",
  },

  {
    productId: "87729303",
    img: {
      src: "./static/4.jpg",
      alt: "OnePlus Nord CE 3 Lite 5G",
    },
    name: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 19,999.00/piece",
  },

  {
    productId: "87729304",
    img: {
      src: "./static/5.jpg",
      alt: "OnePlus 11R 5G",
    },
    name: "OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 39,999.00/piece",
  },

  {
    productId: "87729305",
    img: {
      src: "./static/6.jpg",
      alt: "Xiaomi 13 Pro",
    },
    name: "Xiaomi 13 Pro (Ceramic Black, 12GB RAM 256GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 79,999.00/piece",
  },

  {
    productId: "87729306",
    img: {
      src: "./static/7.jpg",
      alt: "Xiaomi 12 Pro",
    },
    name: "Xiaomi 12 Pro | 5G (Couture Blue, 8GB RAM, 256GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 44,999.00/piece",
  },

  {
    productId: "87729307",
    img: {
      src: "./static/8.jpg",
      alt: "Google Pixel 7",
    },
    name: "Google Pixel 7 5G (Obsidian, 8GB Ram 128GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 46,980.00/piece",
  },

  {
    productId: "87729308",
    img: {
      src: "./static/9.jpg",
      alt: "Google Pixel 6 pro",
    },
    name: "Google Pixel 6 Pro 5G (Cloudy White, 12GB RAM, 256GB Storage)",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 47,999.00/piece",
  },

  {
    productId: "87729309",
    img: {
      src: "./static/10.jpg",
      alt: "Apple iphone 14 pro",
    },
    name: "Apple iPhone 14 Pro (128 GB) - Gold",
    seller_description: "Fulfilled by Carrefour",
    value: "RS 1,19,999.00/piece",
  },
];

let productsOrdered = [];

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function getDiv(attributes = {}) {
  const currentElement = document.createElement("div");
  setAttributes(currentElement, attributes);

  return currentElement;
}

function getImg(attributes = {}) {
  const currentElement = document.createElement("img");
  setAttributes(currentElement, attributes);

  return currentElement;
}

function getIcon(attributes = {}) {
  const currentElement = document.createElement("i");
  setAttributes(currentElement, attributes);

  return currentElement;
}

function getInput(attributes = {}) {
  const currentElement = document.createElement("input");
  setAttributes(currentElement, attributes);

  return currentElement;
}

function getButton(attributes = {}) {
  const currentElement = document.createElement("button");
  setAttributes(currentElement, attributes);

  return currentElement;
}

/*------------------------------------------------------------------------------------
----------------------------HEADER---------------------------------------------------
-------------------------------------------------------------------------------------*/

const headerTopLeftSide = () => {
  const left_side = getDiv({ class: "left flex" });

  const hamBurgerButton = getIcon({ class: "fa-solid fa-bars nav-button" });

  const logo_container = getDiv({ class: "logo-container flex" });

  const logo_icon = getIcon({ class: "fa-solid fa-box-archive" });

  const logo_title = document.createElement("h3");
  logo_title.innerHTML = "Define-Next";

  logo_container.appendChild(logo_icon);
  logo_container.appendChild(logo_title);

  left_side.appendChild(hamBurgerButton);
  left_side.appendChild(logo_container);

  return left_side;
};

const searchBox = () => {
  const search_box = getDiv({ class: "search-box" });

  const search_box_input = getInput({
    type: "text",
    placeholder: "Search for products",
    name: "search",
  });

  const submitBtn = getButton({ type: "submit" });

  const searchIcon = getIcon({ class: "fa fa-search" });

  submitBtn.appendChild(searchIcon);
  search_box.appendChild(search_box_input);
  search_box.appendChild(submitBtn);

  return search_box;
};
const locationSection = () => {
  const location_section = getDiv({ class: "location-section flex" });

  const icon = getIcon({ class: "fa-sharp fa-solid fa-location-dot" });

  const location_container = getDiv({ class: "location-container" });

  const text = getDiv();
  text.innerHTML = "Deliver to";

  const address = getDiv({ class: "location" });

  address.innerHTML = "Dubai Festival City - Dubai";

  location_container.appendChild(text);
  location_container.appendChild(address);

  location_section.appendChild(icon);
  location_section.appendChild(location_container);

  return location_section;
};

const loginRegisterSection = () => {
  const log_in_section = getDiv({ class: "login-register-section flex" });

  const icon = getIcon({ class: "fa-regular fa-circle-user" });

  const text = getDiv();
  text.innerHTML = "Login & Register";

  log_in_section.appendChild(icon);
  log_in_section.appendChild(text);

  return log_in_section;
};

const regionDropdown = () => {
  const region_dropdown = getDiv({ class: "region-dropdown flex" });

  const flag_img = getImg({
    src: "./static/india-flag.png",
    alt: "Indian flag",
  });

  const icon = getIcon({ class: "fa-solid fa-angle-down" });

  region_dropdown.appendChild(flag_img);
  region_dropdown.appendChild(icon);

  return region_dropdown;
};

const shoppingCart = () => {
  const shopping_cart = getDiv({ class: "cart" });

  const cart_icon = getIcon({ class: "fa-solid fa-cart-shopping" });
  const cart_count = document.createElement("span");
  cart_count.setAttribute("class", "cart-count");
  cart_count.innerHTML = productsOrdered.length;

  shopping_cart.appendChild(cart_icon);
  shopping_cart.appendChild(cart_count);

  return shopping_cart;
};

const headerTopRightSide = () => {
  const right_side = getDiv({ class: "right flex" });

  const location_section = locationSection();

  const login_register_section = loginRegisterSection();

  const region_dropdown = regionDropdown();

  const shopping_cart = shoppingCart();

  right_side.appendChild(location_section);
  right_side.appendChild(login_register_section);
  right_side.appendChild(region_dropdown);
  right_side.appendChild(shopping_cart);

  return right_side;
};

const headerTop = () => {
  const header_top = getDiv({ class: "header-top" });

  header_top.appendChild(headerTopLeftSide());

  header_top.appendChild(searchBox());

  header_top.appendChild(headerTopRightSide());

  return header_top;
};

//Header Middle

const headerMiddle = () => {
  const header_middle = getDiv({ class: "header-middle" });
  const search_box = searchBox();

  header_middle.appendChild(search_box);

  return header_middle;
};

//Header Bottom

const headerBottom = () => {
  const header_bottom = getDiv({ class: "header-bottom" });
  const location_section = getDiv({ class: "location-section flex" });
  const icon = getIcon({ class: "fa-sharp fa-solid fa-location-dot" });

  const container = getDiv();
  const boldText = document.createElement("b");
  boldText.innerHTML = "Deliver to: ";

  container.appendChild(boldText);
  const address = document.createTextNode("Dubai Festival City - Dubai");
  container.appendChild(address);

  const change_btn = getDiv({ class: "change-btn" });
  const btn_text = document.createElement("b");
  btn_text.innerHTML = "Change";
  change_btn.appendChild(btn_text);

  location_section.appendChild(icon);
  location_section.append(container);

  header_bottom.appendChild(location_section);
  header_bottom.appendChild(change_btn);

  return header_bottom;
};

//Header Menu List

const headerMenuList = () => {
  const list_item = [
    "",
    "All Categories",
    "Fresh Food",
    "Fruits & Vegetables",
    "Food Cupboard",
    "Beverages",
    "Baby Products",
    "Smartphones, Tablets & Wearables",
    "Electronics & Appliances",
  ];

  const menu_list = getDiv({ class: "menu-list" });
  const list = document.createElement("ul");
  menu_list.appendChild(list);

  list_item.forEach((ele, index) => {
    const list_item = document.createElement("li");
    if (index === 0) {
      const icon = getIcon({ class: "fa-brands fa-windows" });
      list_item.appendChild(icon);
    } else {
      const item = document.createElement("a");
      setAttributes(item, { href: "#" });
      item.innerHTML = ele;
      list_item.appendChild(item);
    }
    list.appendChild(list_item);
  });

  return menu_list;
};

const fillHeader = () => {
  const header = document.getElementById("header");
  const nav_bar = document.createElement("nav");
  const header_items = document.createElement("div");
  header_items.setAttribute("class", "header");
  header_items.appendChild(headerTop());
  header_items.appendChild(headerMiddle());
  header_items.appendChild(headerBottom());
  header_items.appendChild(headerMenuList());

  nav_bar.appendChild(header_items);
  header.appendChild(nav_bar);
};

/*------------------------------------------------------------------------------------
----------------------MAIN SECTION------------------------------------------------
-------------------------------------------------------------------------------------*/

const getTabs = () => {
  const container = getDiv({ class: "head-tabs flex" });

  const scheduled_tab = getDiv({ class: "scheduled flex" });
  scheduled_tab.appendChild(getIcon({ class: "fa-solid fa-truck" }));
  scheduled_tab.appendChild(document.createTextNode("Scheduled"));

  const shopNow_tab = getDiv({ class: "shop-now flex" });
  shopNow_tab.appendChild(getIcon({ class: "fa-solid fa-motorcycle" }));
  shopNow_tab.appendChild(document.createTextNode("Shop NOW"));

  container.appendChild(scheduled_tab);
  container.appendChild(shopNow_tab);

  return container;
};

const getFilterTabs = () => {
  const container = getDiv({ class: "mobile-filter-section head-tabs flex" });

  const filter_tab = getDiv({ class: "filter" });
  filter_tab.appendChild(document.createTextNode("Filter"));
  filter_tab.appendChild(getIcon({ class: "fa-solid fa-filter" }));

  const sortBy_tab = getDiv({ class: "sort-by" });
  sortBy_tab.appendChild(document.createTextNode("Sort By: Relevance"));
  sortBy_tab.appendChild(getIcon({ class: "fa-brands fa-windows" }));

  container.appendChild(filter_tab);
  container.appendChild(sortBy_tab);

  return container;
};

const removeButton = () => {
  const remove_button = getButton({ class: "remove-btn" });
  remove_button.appendChild(getIcon({ class: "fa-regular fa-trash-can" }));

  return remove_button;
};

const addButton = () => {
  const add_button = getButton({ class: "add-btn add-btn-active" });
  add_button.innerHTML = "+";

  return add_button;
};

const getProduct = (product) => {
  const {
    productId,
    img: { src = "", alt = "" },
    name,
    seller_description,
    value,
  } = product;

  //Product-Image
  const prod = getDiv({ class: "product" });
  const prod_img = getImg({ src: src, alt: alt });
  prod.appendChild(prod_img);

  //Product-Name
  const prod_desc = getDiv({ class: "prod-desc" });
  const prod_name = document.createElement("h6");
  prod_name.innerHTML = name;
  prod_desc.append(prod_name);

  //Seller-Description
  const seller_desc = getDiv({ class: "seller-desc" });
  const seller_text = document.createElement("h6");
  const verified_img = getImg({
    src: "./static/Verified.jpg",
    alt: "verified",
  });
  seller_text.innerHTML = seller_description;
  seller_desc.appendChild(verified_img);
  seller_desc.appendChild(seller_text);
  prod_desc.appendChild(seller_desc);

  //Product-Price
  const price = document.createElement("h5");
  price.innerHTML = value;
  prod_desc.appendChild(price);
  prod.appendChild(prod_desc);

  //Product-Add_and_Remove-Buttons
  const product_quantity = getDiv({ class: "product-quantity" });

  //Order-Limit-Message
  const cart_message = document.createElement("h6");
  cart_message.setAttribute("class", "cart-message");
  cart_message.innerHTML = "Max limit reached";
  product_quantity.appendChild(cart_message);

  const buttons_container = getDiv({ class: "buttons-container flex" });

  //Remove-Button
  const remove_button = removeButton();
  buttons_container.appendChild(remove_button);

  remove_button.onclick = () => {
    productsOrdered = productsOrdered.filter((element) => element.productId != productId);
    removeClickHandler(product_quantity);
  };

  //Quantity-Ordered
  const quantity_container = getDiv({ class: "quantity-container" });
  const quantity = document.createElement("h4");
  quantity.setAttribute("class", "quantity");
  quantity.innerHTML = "1";
  quantity_container.appendChild(quantity);
  buttons_container.appendChild(quantity_container);

  //Add-Button
  const add_button = addButton();
  buttons_container.appendChild(add_button);

  product_quantity.appendChild(buttons_container);

  add_button.onclick = () => {
    productsOrdered.push(product);
    addClickHandler(product_quantity);
  };

  prod.appendChild(product_quantity);

  return prod;
};

//Product Click Handler

function addClickHandler(element) {
  const add_button = element.querySelector(".add-btn");
  const remove_button = element.querySelector(".remove-btn");
  const quantity_container = element.querySelector(".quantity-container");
  const cart_message = element.querySelector(".cart-message");
  add_button.classList.remove("add-btn-active");
  remove_button.classList.add("active");
  quantity_container.classList.add("active");
  cart_message.classList.add("active");
  add_button.disabled = true;

  let count = productsOrdered.length;
  const cart_count = document.querySelector(".cart-count");
  cart_count.innerHTML = count;
  cart_count.id = "active";
}

function removeClickHandler(element) {
  const add_button = element.querySelector(".add-btn");
  const remove_button = element.querySelector(".remove-btn");
  const quantity_container = element.querySelector(".quantity-container");
  const cart_message = element.querySelector(".cart-message");
  add_button.classList.add("add-btn-active");
  remove_button.classList.remove("active");
  quantity_container.classList.remove("active");
  cart_message.classList.remove("active");
  add_button.disabled = false;

  let count = productsOrdered.length;
  const cart_count = document.querySelector(".cart-count");
  cart_count.innerHTML = count;
  if (count === 0) {
    cart_count.removeAttribute("id");
  }
}

const fillListView = () => {
  const main_content = document.querySelector(".main-content");

  const list_view = document.createElement("ul");
  list_view.setAttribute("class", "list-view");
  main_content.appendChild(list_view);

  productsData.forEach((item, index) => {
    const product_container = document.createElement("li");
    product_container.setAttribute("class", "product-container");

    const prod = getProduct(item);
    product_container.append(prod);
    list_view.appendChild(product_container);
  });
};

const fillMainContent = () => {
  const main_content = document.querySelector(".main-content");
  main_content.appendChild(getTabs());
  main_content.appendChild(getFilterTabs());
  fillListView();
};

/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------*/

fillHeader();
fillMainContent();

/*
for(i of productsOrdered){
  for(ele of productsData){
      if(ele.productId === i){
          console.log(ele.name);
      } 
  }
}
*/
