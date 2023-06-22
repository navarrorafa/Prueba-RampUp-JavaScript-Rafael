// //Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase


let transformarArray = () => {
    let frase = prompt("Digite uma frase?")
    //frase = frase.trim()
    let arryFrase = frase.split("")
    return(arryFrase)
}

let letraContar = () => {
    let perguntarLetra = prompt("Cual la letra a contar?")
    let letra = perguntarLetra;
    return letra
}

let contar = () => {
    let frase = transformarArray();
    let letra = letraContar();
    let resultado = 0 ;
    // for (let i = 0 ; i < frase.length ; i++) {
    //     if(frase[i] == letra) {
    //         resultado++
    //     } 
        
       
    // }

    //MEJORIA HECHA DEPUES DE LA PRUEBA 
    frase.forEach( (frase) => {
          if(frase == letra) {
            resultado++
        } 
    });
    
    return resultado
}

let imprimir = () => {
    let resultado = contar()

   
    console.log(`A letra  aparece ${resultado} veces en la frase!`)
}
console.log(imprimir())




// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

let perguntarNumero = () => {
    let numero = parseInt(prompt("Escribe uno numero? "));
   return numero 
}

let  imprimirImpares = () => {
    let numero = perguntarNumero();
    for (let i = numero ; i <= numero + 50; i++ ) {
        if ( i % 2 == 1) {
            console.log(`${i} es impar!`)
        }

    }
    
}

imprimirImpares()