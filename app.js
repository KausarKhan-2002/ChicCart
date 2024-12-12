import { RENDER_DATA } from "./scripts/renderData.js";
import { renderCartItems } from "./scripts/renderCartItems.js";


// ====================== Navbar =========================
openNav.addEventListener("click", () => {
  navbar.style.height = "auto";
  navbar.style.opacity = "1";
  openNav.style.display = "none";
  closeNav.style.display = "inline-block";
});

closeNav.addEventListener("click", () => {
  navbar.style.height = "0";
  navbar.style.opacity = "0";
  openNav.style.display = "inline-block";
  closeNav.style.display = "none";
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
cartSection.addEventListener("click", () => {
  const cartContainer = document.createElement("div")
  cartContainer.id = "cartContainer"

  renderCartItems()
})