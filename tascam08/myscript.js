// WITH JQUERY

// $(".btn").click(function(){

//     $.get("http://api.icndb.com/jokes/random", function(response){
//         // console.log(response.value.joke)
//         $("#quote").empty()
//         $("#quote").append(response.value.joke)
//     })
// })

const url = "http://api.icndb.com/jokes/random"

// WITH FETCH PROMISE

document.getElementById("getquote").addEventListener("click", ()=>{
    fetch(url)
    .then(response =>response.json())
    .then(response=>{
        let previousQuote = document.getElementById("quote")
        previousQuote.innerHTML = response.value.joke

    })
});
