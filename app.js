import {RENDER_DATA} from "./scripts/renderData.js"
import { fetchDataByInput } from "./scripts/fetchDataByInput.js";


// ====================== Navbar =========================
openNav.addEventListener("click", () => {
  navbar.style.height = "auto"
  navbar.style.opacity = "1"
  openNav.style.display = "none"
  closeNav.style.display = "inline-block"
})

closeNav.addEventListener("click", () => {
  navbar.style.height = "0"
  navbar.style.opacity = "0"
  openNav.style.display = "inline-block"
  closeNav.style.display = "none"
})


async function FETCH_DATA(API) {
  try {
    const data = await fetch(API);
    const response = await data.json();

    productsContainer.innerHTML = "";

    RENDER_DATA(response.products);
  } catch (error) {
    console.log(error);
  }
};

FETCH_DATA(API);

// ============================ Filter Search Bar ============================
search.addEventListener("input", (e) => {
  productsContainer.innerHTML = "Loading...";

  fetchDataByInput(API, e.target.value);
});