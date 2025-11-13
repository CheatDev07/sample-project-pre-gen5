

"use strict"

 const base_url = "https://api.escuelajs.co/api/v1"

  // create product 
    async function createProduct() {

         const frmCreate = document.getElementById('frmCreateProduct'); 

        frmCreate.addEventListener('submit', async function(e){

            const newProduct = {
            title: document.getElementById('title').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            categoryId:parseInt(document.getElementById('category').value),
            images: ["https://api.escuelajs.co/api/v1/files/c34b.png"]
            }

            e.preventDefault();

            const res = await fetch(`${base_url}/products`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newProduct)
        });
        const data = await res.json(); 
        
        if(data){
           console.log("Create product successfully!")
        }else{
          console.log("Create product unsuccessfully!")
        }
        } )
    }
    createProduct(); 
