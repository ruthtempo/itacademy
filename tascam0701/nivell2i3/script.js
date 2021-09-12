// funcio calculadora
function calcular(operador, valor1, valor2){
    if (operador === "-"){
        return valor1 - valor2;
    }else if (operador === "+"){
        return valor1 + valor2
    }else if( operador === "/"){
        return valor1/valor2;
    }else if(operador === "x"){
        return valor1*valor2
    }else{
        console.log("no entiendo")
    }
}

var resultado = calcular('-',40,20);

console.log(resultado)

// calculadora completa

function checkIfOperator(label){
    if(label=== "+" || label === "-" || label==="x" || label=== "/" ){
        return true
    }else{
       return false
    }
}

// una altra manera d'escriure la funció:
// function checkIfOperator(operator){
//     return operator=== "+" || operator === "-" || operator==="x" || operator=== "/"
// }

function checkIfNumber(label){
    if(label==="C" || label==="=" || checkIfOperator(label)){
        return false
    }else{
        return true
    }
    
}

let value1, operator, value2;
let resultat 

document.addEventListener("click", function(event){
    // console.log(event, label);
    const label = event.target.innerText;
    // reset
    if(label==="C"){
        value1=undefined;
        operator=undefined;
        value2=undefined;
        document.getElementById("input").value = "0"
    }
    // first value
    else if(value1===undefined){
        if (checkIfNumber(label)){
            value1= parseInt(label);
            document.getElementById("input").value = value1
        }
    // operator
    }else if(operator===undefined){
        if(checkIfOperator(label)){
            operator=label
            document.getElementById("input").value = operator
        }
        
    // second value
    }else if(value2===undefined){
        if(checkIfNumber(label)){
            value2= parseInt(label)
            document.getElementById("input").value = value2
           
        }
        
    // result
    }else if(label === "="){
        if(operator ==="/" && value2 === 0){
            document.getElementById("input").value = "error"
            value2=undefined
        }else{
            resultat = calcular(operator, value1, value2)
            document.getElementById("input").value = resultat
        }
    }

    // when there is a result in calcultor and I click a number, 
    // it starts a new calculation and it gets saved to value 1
        
    console.log("value1:", value1)
    console.log("operator:", operator)
    console.log("value2:", value2)
    console.log("resultat:", resultat)

    if(resultat && checkIfNumber(label)){
        value1= parseInt(label);
        value2=undefined;
        resultat=undefined;
    }

    if(resultat && checkIfOperator(label)){
        value1= resultat;
        value2=undefined;
        resultat=undefined; 
    }
});
