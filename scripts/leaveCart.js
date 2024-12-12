import { RENDER_DATA } from "./renderData.js";

export function leaveCart(arrowLeft) {
  
  const handleLeaveCart = async () => {
    productsMain.innerHTML = "";

    // It will add protection data again in productsMain defined in variable define file
    protectData();

    try {
      const data = await fetch(API);
      const response = await data.json();
      // console.log(response.products);

      RENDER_DATA(response.products);
    } catch (error) {
      console.log(error);
    }
  };

  arrowLeft.addEventListener("click", handleLeaveCart);
}
