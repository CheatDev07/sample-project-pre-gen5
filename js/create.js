

"use strict"

const base_url = "https://api.escuelajs.co/api/v1"

// create product 
async function createProduct() {

  // function for upload image 
   async function submitPhoto() {
            const photo = document.getElementById("images").files[0];
            const frmData = new FormData();

            const image = frmData.append("file", photo);

            const base_url = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
                method: "POST",
                body: image
            });

            const data = await base_url.json();
            console.log("the phto: ", data);

            return data.location;

        }

  const frmCreate = document.getElementById('frmCreateProduct');

  frmCreate.addEventListener('submit', async function (e) {
    
    e.preventDefault();

    
    const images = await submitPhoto();
    console.log("The value of image", images)
 

    const newProduct = {
      title: document.getElementById('title').value,
      price: document.getElementById('price').value,
      description: document.getElementById('description').value,
      categoryId: parseInt(document.getElementById('category').value),
      images: [images]
    }


    const res = await fetch(`${base_url}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });
    const data = await res.json();

    if (data) {
      console.log("Create product successfully!")
    } else {
      console.log("Create product unsuccessfully!")
    }
  })
}
createProduct(); 

localStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");

console.log("The value of accesstoken: ", localStorage.getItem("accessToken"));

localStorage.removeItem("accessToken");

localStorage.clear();

