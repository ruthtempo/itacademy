
  
    // exercici1

    let hello = "hello world"
    console.log(hello)

    //exercici 2

    alert("Em dic Ruth")

    // exercici 3
    let nom = "Ruth"
    let cognom = "Temporal"

    console.log(nom + " " + cognom)

    // exercici 4

    let num1 = 4;
    let num2 = 5;

    let suma = num1+num2;

    console.log(`La suma de ${num1} i ${num2} és ${suma}`);

    // exercici 5

    let nota_examen = 4;

    if (nota_examen >= 5){
        alert("enhorabona, has aprovat!")
    }else{
        alert("oh no! has suspès...")
    }

    //exercici 6

    let frase = "tinc un cotxe de color blau";
    console.log(frase.replace("blau", "verd"))


    console.log(frase.replace(/o/g, "u"))

    // exercici 7
   const objectes = ["taula", "cadira", "ordinador", "llibreta"];

//    iterate each element of the array 
//    every time returns a string with the element of the array and its position
//     "L'objecte x és a la posició y"


    function fraseguay(objecte, index){
        console.log(`l'objecte ${objecte} és a la posició ${index}`)
    }

    objectes.forEach(fraseguay)

    // exercici 8

    // operadors:suma, resta, multiplica, divideix
    //valor1 i valor2 són inputs

    function calculadora(operador, valor1, valor2){
        if (operador === "resta"){
            return valor1 - valor2;
        }else if (operador === "suma"){
            return valor1 + valor2
        }else if( operador === "divideix"){
            return valor1/valor2;
        }else if(operador === "multiplica"){
            return valor1*valor2
        }
    }

    var resultat = calculadora('resta',40,20);
    
    console.log(resultat)
    
