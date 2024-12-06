import { RENDER_DATA } from "./renderData.js";

export async function fetchDataByInput(API, inputValue) {
    try {
      const data = await fetch(API);
      const response = await data.json();
  
      let searchData = response.products.filter((data) =>
        data.title.toLowerCase().includes(inputValue.toLowerCase())
      );
  
      RENDER_DATA(searchData);
    } catch (error) {
      console.log(error);
    }
  };
  
 