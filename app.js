import { RENDER_DATA } from "./scripts/renderData.js";
import { renderCartItems } from "./scripts/renderCartItems.js";

// ====================== Navbar =========================

// It will handle navbar and make it either visible or hidden
const handleCartVisibility = (isVisible) => {
  if (isVisible) {
    navbar.style.height = "auto";
    navbar.style.opacity = "1";
    openNav.style.display = "none";
    closeNav.style.display = "inline-block";
  } else {
    navbar.style.height = "0";
    navbar.style.opacity = "0";
    openNav.style.display = "inline-block";
    closeNav.style.display = "none";
  }
};

openNav.addEventListener("click", () => {
  handleCartVisibility(true);
});

closeNav.addEventListener("click", () => {
  handleCartVisibility(false);
});

async function FETCH_DATA(API) {
  try {
    const data = await fetch(API);
    const response = await data.json();

    productsContainer.innerHTML = "";

    // Filter data by input
    search.addEventListener("input", (e) => {
      let filterData = response.products.filter((data) =>
        data.title.toLowerCase().includes(e.target.value.toLowerCase())
      );

      // return no data if data is not available while filtering
      if (filterData.length === 0) {
        productsContainer.innerHTML = `<h1 class="absolute text-xl top-[10px] sm:left-[40%]">No products found</h1>`;
        return;
      }

      // After filtering data render those data
      RENDER_DATA(filterData);
    });

    RENDER_DATA(response.products);
  } catch (error) {
    console.log(error);
  }
}

FETCH_DATA(API);

// ======================= Cart section ==========================
const cartDisabled = document.querySelectorAll(".cartDisable");
cartSection.addEventListener("click", () => {
  renderCartItems();
});

// Add media query using js
const mediaQuery = window.matchMedia("(max-width: 640px")

if (mediaQuery.matches) {
  cartDisabled.forEach((cartItem) => {
    cartItem.addEventListener("click", () => {
      handleCartVisibility(false);
    });
  });
};
