import { leaveCart } from "./leaveCart.js";
import { handleQuantity } from "./handleQuantity.js";

export function renderCartItems() {
  // console.log(cartArr);

  let totalPrice = 0

  let cartItem = "";

  let cartBody = document.createElement("div")
  cartBody.id = "cartBody"
  cartBody.classList.add("lg:flex", "justify-between")

  if (cartArr.length === 0) {
    cartBody.innerHTML = "";
    productsMain.innerHTML = ""

    cartBody.innerHTML = `
      <i id="arrowLeft" class="fa fa-arrow-left mb-2 cursor-pointer py-3 px-8 text-[1.3rem]" aria-hidden="true"></i>
      <h1 class="text-center text-2xl">Your cart is empty...</h1>
    `;

    productsMain.appendChild(cartBody);
    const arrowLeft = document.getElementById("arrowLeft");
    leaveCart(arrowLeft);
  } else {
    cartArr.forEach((item) => {
      cartItem += `
            <section id=${item.id} class="cartItem grid grid-cols-3 justify-between items-center border-t border-slate-200 pt-2 pb-4">
                <div>
                    <img src=${item.thumbnail} class="w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]  rounded-full bg-[#86EDC9] p-1"/>
                </div>

                <div class="flex justify-between items-center col-span-2">
                    <p class="text-[.8rem] sm:text-[.9rem] lg:text-[1rem] xl:text-[1.1rem]"><i class="fa fa-inr" aria-hidden="true"></i> ${item.price}</p>
                    <div class="relative border-2 flex items-center justify-between w-[14vw]">
                        <button class="decr text-[.9rem] sm:text-[1rem] lg:text-[1.1rem] text-slate-500"><i class="fa fa-minus" aria-hidden="true"></i></button>
                        <span class="count text-[.9rem] sm:text-[1.1rem] lg:text-[1.2rem]">1</span>
                        <button class="incr text-[.9rem] sm:text-[1rem] lg:text-[1.1rem] text-slate-500"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                    <p class="text-[.8rem] sm:text-[.9rem] lg:text-[1rem] xl:text-[1.1rem] font-medium"><i class="fa fa-inr" aria-hidden="true"></i> ${item.price}</p>
                </div>

                <h2 class="text-[.8rem] sm:text-[.9rem] lg:text-[1rem] xl:text-[1.1rem] font-medium mt-1">${item.title}</h2>
                
            </section>
            `;
    });

    cartArr.forEach(cart => totalPrice += cart.price)

    
    // Cart checkout
    let cartCheckout = `
      <div id="cartCheckout" class="bg-[#86EDC9] p-6 lg:w-[38%]">

        <div id="checkOutHead" class="text-center">
          <h2 class="text-[.9rem] sm:text-[1rem] md:text-[1.2rem] font-medium">Discount / Promo Code</h2>
          <p class="text-[.6rem] sm:text-[.7rem] md:text-[.8rem] ">Don't have any code yet? <a href="#" class="text-blue-600">Go to your promotional program</a></p>
        </div>

        <div id="checkOutInput" class="flex justify-between mt-3 bg-white p-1 rounded-md text-[.8rem] sm:text-[.9rem] md:text-[1rem]">
          <input type="text" placeholder="Promo code here" class="px-2 border-none outline-none" />
          <button class="bg-red-700 text-slate-100 px-2 py-1 rounded-md">Apply</button>
        </div>

        <div id="checkOutBody" class="flex flex-col gap-5 mt-5 text-[.8rem] sm:text-[.9rem] md:text-[1rem]">
          <div id="deliveryProcess">
            <p class="flex justify-between border-b border-slate-400 pb-3">
              <span>Subtotal</span> <span>996</span></p>
            <p class="flex justify-between mt-3">
              <span>
                <input type="radio" id="rate" name="checkInput" class="form-radio scale-110 sm:scale-125 lg:scale-150"/> &nbsp;
                <label for="rate" class="cursor-pointer">Flate rate</label>
              </span>
              <span>996</span>
            </p>
            <p class="mt-1">
              <input type="radio" id="shipping" name="checkInput" class="form-radio scale-110 sm:scale-125 lg:scale-150" /> &nbsp;
              <label for="shipping" class="cursor-pointer">Free Shipping</label>
            </p>
          </div>

          <div id="deliveryAdress" class="text-[.8rem] sm:text-[.9rem] md:text-[1rem]">
            <h4 class="font-medium">Address :</h4>
            <p class="text-slate-800 text-[.7rem] sm:text-[.8rem] xl:text-[.9rem]">Bara Ghazipur, satahwa, pincode 232325</p>
            <button class="text-blue-700 text-[.6rem] sm:text-[.7rem] xl:text-[.8rem]"><i class="fa fa-pencil" aria-hidden="true"></i> &nbsp; Change Address</button>
          </div>

          <div id="totalPrice" class="flex justify-between text-[.8rem] sm:text-[.9rem] md:text-[1rem] border-t border-b border-slate-400 px-1 py-3">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
        </div>

        <div class="w-full mt-4"><button class="w-full py-1 text-slate-100 bg-red-700 text-[.8rem] sm:text-[.9rem] lg:text-[1rem] lg:py-2">Checkout</button></div>
      </div>
    `

    cartBody.innerHTML = `
      <div id="cartItems" class="lg:w-[62%] bg-[#eee] p-2 lg:p-3">
        <div id="cartHeading" class="grid grid-cols-4 text-[.8rem] sm:text-[.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.2rem] text-center">
          <p class="text-left ml-[10%]">Product</p>
          <p>Price</p>
          <p class="ml-[40%]">Quantity</p>
          <p class="text-right">Total</p>
        </div>
        <div id="cartData"></div>
      </div>
    `
    cartBody.innerHTML += cartCheckout

    productsMain.innerHTML = "";
    productsMain.innerHTML = `
     <i id="arrowLeft" class="fa fa-arrow-left py-3 px-8 mb-2 text-[1.3rem] cursor-pointer" aria-hidden="true"></i>
    `;

    productsMain.appendChild(cartBody)
    
    const cartData = document.getElementById("cartData")
    cartData.innerHTML += cartItem
    // console.log(cartItem);
    

    // To increment or decrement cart item
    const incrBtns = document.querySelectorAll(".incr");
    const decrBtns = document.querySelectorAll(".decr");

    handleQuantity(incrBtns);
    handleQuantity(decrBtns);
    

    const arrowLeft = document.getElementById("arrowLeft");
    leaveCart(arrowLeft);
  }
}
