import { renderInfoByData } from "./renderInfoByData.js";

export function RENDER_DATA_INFO(productData, apiData) {
  
    // Filter API data by ID
    const filterApiData = (productId) => {
      for (let item of apiData) {
        if (item.id == productId) return item;
      }
    };
  
    // Iterate product data to get ID
    for (let item of productData) {
      item.addEventListener("click", () => {
        let filterDataInfo = filterApiData(Number(item.id));
        renderInfoByData(filterDataInfo);
      });
    }
  };