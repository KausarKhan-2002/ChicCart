import {fetchDataInformation} from "./fetchDataInformation.js"

export function RENDER_DATA(data) {
    let productData = "";
  
    for (let item of data) {
      productData += `
          <div id=${item.id} class="productData relative shadow-md cursor-pointer rounded-2xl hover:scale-95 transition z-0">
            <p class="cardCategory absolute top-0 right-0 bg-[#86EDC9] px-2 py-1 sm:px-2 sm:py-1 sm:text-[.9rem] rounded-bl-lg">${item.category}</p>
             <img src=${item.images[0]} alt="banner" class="w-full h-[200px] object-contain">
               <div class="ml-3 mb-3">
               
                 <p class="cardTitle md:text-lg font-medium">${item.title}</p>
                 <p class="cardRatingPrice">
                   <i class="fa fa-star ${item.rating >= 3 ? "text-green-500" : "text-red-500"}" aria-hidden="true"></i>
                   <span>${item.rating}</span> &nbsp; - &nbsp;
                   <span class="font-medium">&#8377;</span> <span>${item.price}</span>
                 </p>
                 </div>
          </div>
          `;
    }
  
    productsContainer.innerHTML = productData;
  
    // Fetch information by data source
    fetchDataInformation(productsContainer.children);
  };