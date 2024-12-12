export const addToCart = (cartBtns, cardInfo) => {

  cartBtns.addEventListener("click", () => {
    if (cartArr.length == 0) cartArr.push(cardInfo);
    else {
      let isUniqueItem = true;

      for (let cartItems of cartArr) {
        if (cartItems.id == cardInfo.id) {
          isUniqueItem = false;
          break;
        }
      }

      isUniqueItem && cartArr.push(cardInfo);
    }

    cartLength.innerHTML = cartArr.length;

    // console.log(cartArr, cartArr.length);
  });
};
