import { RENDER_DATA_INFO } from "./renderDataInfo.js";

export function fetchDataInformation(productData) {
    const fetchData = async (API) => {
      try {
        const data = await fetch(API);
        const response = await data.json();
  
        // Data information is rendered
        RENDER_DATA_INFO(productData, response.products);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData(API);
  };