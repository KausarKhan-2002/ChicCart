const API = "https://dummyjson.com/products";
const productsContainer = document.getElementById("products_container");
const search = document.getElementById("search");
const productInfo = document.getElementById("productInfo")
const productsMain = document.getElementById("product_main")
const navbar = document.getElementById("navbar")
const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")
const filters = document.getElementById("filters")
const searchBar = document.getElementById("searchBar")
const cartSection = document.getElementById("cartSection")
const cartArr = []
const cartLength = document.getElementById("cartLength")

// It will protect data of productsMain to reuse in DOM
const protectData = () => {

    productsMain.append(filters)
    productsMain.append(searchBar)
    productsMain.append(productsContainer)
    
    productsContainer.innerHTML = `
        <div id="spinner" class="absolute top-0 left-[48%] animate-spin rounded-full h-20 w-20 border-t-4 border-[#86EDC9]"></div>
        <div class="dummy w-full h-[100vh]"></div>`
}