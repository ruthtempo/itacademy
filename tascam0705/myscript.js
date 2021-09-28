
// name
// price
// year
//save product
//toast with product with delete option


class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
        

        document.getElementById("displayProduct").innerHTML += `<div class="card" id="${this.name}-card">
            <div class="card-body">
                <strong>Product Name: </strong> ${this.name} 
                <strong>Product Price: </strong> ${this.price}
                <strong>Product Year: </strong> ${this.year}  
                <button type="button" class="btn btn-danger delete" id="${this.name}">Delete</button>
            </div>
        </div>`

    // SHOW ALERT "SUCCESS"
         document.getElementById("alert").innerHTML += `<div class="alert alert-success" role="alert" id="${this.name}-success">
        Product Added Successfully!
        </div>` 

    //    FADE SUCCESS ALERT
        setTimeout(()=>{
            document.getElementById("alert").removeChild(
                document.getElementById(`${this.name}-success`)
            )
        },5000)
        
        

        document.addEventListener("click", (event)=>{
            if(event.target.id === this.name){
                this.delete();
             }
        })
    }

    delete(){
        document.getElementById("displayProduct").removeChild(
            document.getElementById(`${this.name}-card`)
        )
        document.getElementById("alert").innerHTML += `<div class="${this.name} alert alert-danger" role="alert" id="${this.name}-delete">
        Product Deleted Sucessfully!
      </div>`

    // FADE DELETE ALERT
      setTimeout(()=>{
        document.getElementById("alert").removeChild(
            document.getElementById(`${this.name}-delete`)
        )
    },5000)
    
    }
}

document.getElementById("saveProduct").addEventListener("click", function() {

    checkIfEmpty("productName")
    checkIfEmpty("productPrice")
    checkIfEmpty("productYear")

    
    const productName = document.getElementById("productName").value ;
    const productPrice = document.getElementById("productPrice").value ;
    const productYear = document.getElementById("productYear").value ;
    
    // cocacola
    // 2
    // 1990
    const newProduct = new Product (productName, productPrice, productYear)
    // console.log(newProduct)

});


function checkIfEmpty(id) {

    let input = document.getElementById(id)

    if (input.value === "") {
        document.getElementById(id).classList.add("is-invalid")
        document.getElementById("alert").innerHTML = `<div class="${this.name} alert alert-warning" role="alert" id="${this.name}-warning">
        Complete Required Fields Please
        </div>`
    } else {
        document.getElementById(id).classList.remove("is-invalid")
        document.getElementById("alert").removeChild(
            document.getElementById(`${this.name}-warning`)
        )
    }

};



// falta crear condició: quan cap sigui invalid es crea l'objecte
    



// addEventListener("click", function(event) {
//     if(event.target.classList.contains("delete")){
//       document.getElementById("displayProduct").removeChild(
//   document.getElementById(`${event.target.id}-card`)
//         //  event.target.parentNode.parentNode 
//       )
//     }

// });


