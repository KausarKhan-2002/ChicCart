let price

export const handleQuantity = (btns) => {

    if (btns[0].classList.contains("incr")) {
      btns.forEach((btn) => {
        // Save price to use on increment or decrement
        price = Number(
          btn.parentElement.parentElement.lastElementChild.innerText
        );
        btn.addEventListener("click", () => {
          const prevEle = btn.previousElementSibling;
          // incrTotalPrice will convert price in number and add from real price
          const incrTotalPrice =
            btn.parentElement.parentElement.lastElementChild;

          console.log(incrTotalPrice);

          prevEle.innerText = Number(prevEle.innerText) + 1;
          const totalPrice = Number(incrTotalPrice.innerText) + price;
          incrTotalPrice.innerText = totalPrice.toFixed(2);
        });
      });
    } else {
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextEle = btn.nextElementSibling;

          // incrTotalPrice will convert price in number add itself
          const decrTotalPrice =
            btn.parentElement.parentElement.lastElementChild;

          console.log(decrTotalPrice);
          console.log(price);
          

          if (Number(nextEle.innerText).toFixed(2) > 1) {
            nextEle.innerText = Number(nextEle.innerText) - 1;
            const totalPrice = Number(decrTotalPrice.innerText) - price;
            decrTotalPrice.innerText = totalPrice.toFixed(2);
          }
        });
      });
    }
    
    return price

  };