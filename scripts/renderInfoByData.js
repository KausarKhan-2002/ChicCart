export function renderInfoByData(dataInfo) {
    const handleTags = (tags) => {
      let data = ""
  
      tags.forEach((item, ind) => {
        data += `
        <li class="categoryItem px-10 py-4 rounded-md shadow-sm bg-[#fcfcfc] border-b-2 border-[#86EDC9]">${ind+1}. ${item}</li>
      `
      })
  
      return data
    }
  
    const handleReviews = (reviews) => {
      let data = ""
  
      // ============= Inner function ==============
      const handleRatings = (ratings) => {
        let reviewData = ""
  
        for (let i = 0; i < ratings; i++) {
          reviewData += `
            <i class="fa fa-star text-green-500" aria-hidden="true"></i>
          `
        }
        
        return reviewData
      }
  
      reviews.forEach((item) => {
        data += `
          <div class="relative border-b-2 border-[#86EDC9] shadow-sm bg-[#fcfcfc] pt-4 rounded-t-lg">
            
            <h3 class="reviewsName text-[.9rem] sm:text-[1.1rem] text-center text-lg">${item.reviewerName}</h3>
            <p class="reviewsRating text-[.9rem] text-center mt-1 mb-1">${handleRatings(item.rating)}</p>
            <p class="reviewsComment text-[.9rem] text-center mb-2 text-slate-700">${item.comment}</p>
            <p class="reviewsEmail text-center text-[.7rem] bg-[#86EDC9] rounded-t-lg py-1 px-3">${item.reviewerEmail}</p>
          </div>
        `
      })
  
      return data
      
    }
  
    productsContainer.innerHTML = ""
  
    let dataInformation = `
    <section id="info_container" class="sm:w-[85%] lg:w-[80%] mx-auto">
      <div class="flex justify-between items-center text-[.8rem] gap-10 w-[90%] mx-auto">
        <div class="flex gap-20 items-center text-slate-700">
          <p class="arrowLeft text-2xl cursor-pointer"><i class="fa fa-arrow-left" aria-hidden="true"></i></p>
          <p class="barCat"><span class="text-medium text-md">Barcode:</span> ${dataInfo.meta.barcode}</p>
        </div>
        <p class="barCat">Category: ${dataInfo.category.toUpperCase()}</p>
      </div>
  
      <div id="general_info" class="general_info flex lg:flex-row lg:justify-between items-center mt-5 pb-7">
        <div class="flex flex-col items-center">
          <img src=${dataInfo.thumbnail} class="thumbnail bg-[#86EDC9] w-[200px] h-[200px] rounded-full"/>
          <h3 class="thumbnailBrand text-lg mt-3 font-medium">${dataInfo.brand}</h3>
        </div>
  
        <div class="generalDetails md:w-[65%]">
          <h3 class="infoTitle text-xl font-medium mb-2">${dataInfo.title}</h3>
          <p class="infoDescription text-slate-700">${dataInfo.description}</p>
          <p class="infoRatingPrice mt-5"><i class="fa fa-star ${dataInfo.rating >= 3 ? "text-green-500" : "text-red-500"}" aria-hidden="true"></i>
              <span>${dataInfo.rating}</span> &nbsp; - &nbsp;
              <span class="font-medium">&#8377;</span> <span>${dataInfo.price}</span>
          </p>
          <p class="infoWarranty flex items-center gap-2 mt-2 bg-[#86EDC9] text-slate-600 font-bold py-1 px-2 rounded-b-2xl">
             <i class="fa fa-check-circle-o text-2xl text-green-800" aria-hidden="true"></i> 
             ${dataInfo.warrantyInformation}
          </p>
        </div>
      </div>
  
      <div id="deep_info" class="deep_info grid sm:grid-cols-4 gap-4 pt-7 border-t-2 border-slate-100">
        <p class="flex flex-col justify-center items-center border-b-2 rounded-lg border-[#86EDC9] h-[80px] shadow-sm bg-[#fcfcfc]">
          <span class="deepInfoTitle font-medium">Stocks</span>
          <span class="deepInfoSubTitle">${dataInfo.stock}</span>
        </p>
        <p class="flex flex-col justify-center items-center border-b-2 rounded-lg border-[#86EDC9] h-[80px] shadow-sm bg-[#fcfcfc]">
          <span class="deepInfoTitle font-medium">Discount</span>
          <span class="deepInfoSubTitle">${dataInfo.discountPercentage}</span>
        </p>
        <p class="flex flex-col justify-center items-center border-b-2 rounded-lg border-[#86EDC9] bg-[#fcfcfc] h-[80px] shadow-sm bg-[#fcfcfc]">
          <span class="deepInfoTitle font-medium">Order Quantity</span>
          <span class="deepInfoSubTitle">${dataInfo.minimumOrderQuantity}</span>
        </p>
        <p class="flex flex-col justify-center items-center border-b-2 rounded-lg border-[#86EDC9] h-[80px] shadow-sm bg-[#fcfcfc]">
          <span class="deepInfoTitle font-medium">Weight</span>
          <span class="deepInfoSubTitle">${dataInfo.weight}</span>
        </p>
      </div>
  
      <div id="deliveryInfo" class ="deliveryInfo grid sm:grid-cols-2 gap-4 mt-5 pb-10">
        <p class="infoDelivery text-[.7rem] sm:text-[.8rem] lg:text-[1rem]  px-5 py-5 border-b-2 border-[#86EDC9] rounded-lg shadow-sm flex flex-col justify-center items-center bg-[#fcfcfc]">
          <i class="fa fa-retweet text-slate-700 text-[1.3rem] sm:text-[1.6rem] lg:text-[1.9rem]" aria-hidden="true"></i>
          <span>${dataInfo.returnPolicy}</span>
        </p>
        <p class="infoDelivery text-[.7rem] sm:text-[.8rem] lg:text-[1rem]  px-5 py-5 border-b-2 border-[#86EDC9] rounded-lg shadow-sm flex flex-col justify-center items-center bg-[#fcfcfc]">
          <i class="fa fa-shirtsinbulk text-slate-700 text-[1.3rem] sm:text-[1.6rem] lg:text-[1.9rem]" aria-hidden="true"></i>
          <span>${dataInfo.shippingInformation}</span>
        </p>
      </div>
  
      <div id="categories_info" class="pt-5 pb-10 border-t-2 border-slate-100">
         <h3 class="categoryTitle mb-2 sm:text-xl font-medium">What you will get ?</h3>
         <ul class="categoryLists flex gap-4 sm:ml-10">
            ${handleTags(dataInfo.tags)}
         </ul>
      </div>
  
      <div id="reviews_info" class="pt-5 border-t-2 border-slate-100">
        <h2 class="reviewsTitle mb-2 sm:text-xl font-medium">What Client says ?</h2>
        <div class="reviewsLists grid lg:grid-cols-3 gap-5 sm:ml-10">
          ${handleReviews(dataInfo.reviews)}
        </div>
      </div>
  
      <div id="qrCode" class="pt-20 flex flex-col justify-center items-center bg-[#fcfcfc]">
        <h2 class="text-[.8rem] sm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-medium mb-2">You can scan here to pay in easy way</h2>
        <img src=${dataInfo.meta.qrCode} class="w-[100px] sm:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[230px]"/>
      </div>
    </section>
    `
    productsMain.innerHTML = dataInformation
  };