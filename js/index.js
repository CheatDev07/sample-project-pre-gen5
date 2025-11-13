
"use strict"

// get call products 
const base_url = "https://api.escuelajs.co/api/v1"

async function GetAllProducts() {

    const res = await fetch(`${base_url}/products?offset=0&limit=8`);
    const data = await res.json();

    const card = data.map((pro) => {
        return `
           <div>
           <a href="./pages/detail.html?id=${pro?.id}">
               <img class="mb-7 rounded-xl" src="${pro?.images[0]}">
           </a>
        <div>
          <h3 class="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">${pro?.title}</h3>
          <p class="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">${pro?.description}</p>
          <button class="text-[#3e9d26] text-sm font-semibold font-['Roboto']">Shop</button>
        </div>
      </div>
        `
    }).join('');

    document.getElementById('conainer-card').innerHTML += card;  
}

// calling function
GetAllProducts();

