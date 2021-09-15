

let icons= document.getElementById("icons");

// hearts contains all elements with the class .heart
let hearts = document.querySelectorAll(".heart")

  icons.addEventListener("click", function(event) {
    //   stops bubbling effect
    event.stopPropagation() 

    //iterate the hearts array, run function for each element (heart)    
    hearts.forEach(removeClass)

    //  add active class to clicked element  
    event.target.classList.add("active")

  });

//remove class "active" of the element with that class
function removeClass(elem){
    if(elem.classList.contains("active")){
        elem.classList.remove("active")
    }
}


let body = document.getElementById("body")
// reset color by removing active class
body.addEventListener("click", function(event) {
    hearts.forEach(removeClass)

});





