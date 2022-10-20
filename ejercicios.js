// 1. Contraseña válida

function contrasenaValida(string) {
    if (string === "2Fj(jjbFsuj" || string === "eoZiugBf&g9") {
        return true;
    }
    return false
    //se pudiera resolver tambien solo con return
    //return string === "2Fj(jjbFsuj" || string === "eoZiugBf&g9"
    //porque ya es una expresion booleana
}


// código de prueba
//   console.log(contrasenaValida("2Fj(jjbFsuj")) // true
//   console.log(contrasenaValida("eoZiugBf&g9")) // true
//   console.log(contrasenaValida("hola")) // false
//   console.log(contrasenaValida("")) // false

//2. Calcular impuestos

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40;
    }
    return 0

}

// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

//3. IMC (ïndice de masa corporal)

function bmi(peso, altura) {
    let bmi = peso / (altura * altura)
    if (bmi < 18.5) {
        return "Bajo de peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Sobrepeso";
    } else if (bmi >= 30) {
        return "Obeso";
    }

}

// console.log(bmi(65, 1.8)) // "Normal" 
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

//4. Imprimir un arreglo

//pasar arreglo como parametro con 3 puntos
function imprimirArreglo(...element) {
    // let names = element;
    // console.log(element)
    //for loop
    //     for(let i=0; i<=names.length; i++){
    //      console.log(names[i]);
    // }
    element.forEach(e => {
        console.log(e)
    })
}

// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))

//5. Número de Likes

function likes(numero) {
    if (Math.trunc(numero / 1000000) > 0) {
        return Math.trunc(numero / 1000000) + ' M';
    }
    else if (Math.trunc(numero / 1000) > 0) {
        return Math.trunc(numero / 1000) + ' K';
    }
    else {
        return numero + '';
    }

}

// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

//6. FizzBuzz

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let mensaje = "";

        if (i % 3 === 0) {
            mensaje += "Fizz";
        }
        if (i % 5 === 0) {
            mensaje += "Buzz";
        }
        else {
            console.log(mensaje || i);
        }

    }

}
// fizzbuzz()

//7. Contar rango de números

function contarRango(number1, number2) {
    return number2 - number1 - 1;
}

// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

function range(start, stop = undefined, step = 1) {
    const startArray = stop === undefined ? 0 : start;
    const stopArray = stop === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1 }, (_, i) => startArray + (i * step));
}

//8. Sumar rango de números

function sumarRango(numeroInicial, numeroFinal) {
    let total = 0
    if (numeroInicial === numeroFinal) {
        return 0;
    }
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        total = total + i;
    }
    return total;
}


// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

//9. Número de aes (letra "a")

function numeroDeAes(palabra) {
    const vocales = "a";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};


// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

//10. Número de caracteres

function numeroDeCaracteres(string, caracter) {
    const numcar = []
    for (let i = 0; i < caracter.length; i++) {
        let arreglo = []
        string.split('').map(n => {
            if (n === caracter[i]) {
                arreglo.push(n)
            }
        })
        numcar.push({ [caracter[i]]: arreglo.length })
    }

    return numcar
}

// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

//11. Sumar arreglo

//  function sumarArreglo(element) {
//     const newArray =[...element]
//     if (newArray.length===0){
//         return 0
//     }
//     const reducer = (accumulator, curr) => accumulator + curr;
//     return newArray.reduce(reducer);

//  }

// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

//12.Multiplicar arreglo

function multiplicarArreglo(arreglo) {
    const newArray = [...arreglo]
    if (newArray.length === 0) {
        return 1
    }
    return newArray.reduce((p, c) => p * c);

}

// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

//13. Remover ceros

function removerCeros(array) {
    const newArray = [...array]
    return newArray.filter(valor => valor !== 0)
}

// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

//14. Sumar arreglo entre el rango

function sumarArreglo(arreglo, pos1, pos2) {
    const newArray = [...arreglo]
    const inicio = pos1;
    const fin = pos2;
    let suma = 0;
    if (fin === 0) {
        return 0
    }

    for (let i = inicio; i <= fin; i++) {
        suma += newArray[i];
    }

    return suma;
}


// console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
// console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

// 15. Transcribir ADN a ARN

function transcribir(string) {
    const mapObj = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    };
    return string.replace(/G|C|T|A/gi, function (matched) {
        return mapObj[matched];
    });
}

// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

// 16. Capitalizar palabra

function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// console.log(capitalizar("pedro") )// "Pedro"
// console.log(capitalizar("hola mundo")) // "Hola mundo"
// console.log(capitalizar(""))

// 17. Capitalizar cada palabra

function capitalizarca(string) {
    const cadena = string.split(' ');

    for (let i = 0; i < cadena.length; i++) {
        cadena[i] = cadena[i].charAt(0).toUpperCase() + cadena[i].substring(1);
    }
    return string = cadena.join(' ');
}

// console.log(capitalizarca("hola mundo")) // "Hola Mundo"
// console.log(capitalizarca("make it real")) // "Make It Real"
// console.log(capitalizarca("")) // ""

// 18. Encontrar el número máximo

function max(array) {
    const newArray = [...array]
    let mayor = 0
    newArray.forEach(element => {
        if (mayor < element) {
            mayor = element
        }
    });
    return mayor
}

// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

// 19. Encontrar el número mínimo

function min(array) {
    const newArray = [...array]
    let menor = newArray[0]
    newArray.forEach(element => {
        if (menor > element) {
            menor = element
        }
    });
    return menor
}

// console.log(min([3, 9, 6])) // 3
// console.log(min([67, 35, 54, 26])) // 26
// console.log(min([5, 9, 2, 4, 5, 7])) // 2

// 20. Generar contraseña

function password(string) {
    const mapObj = {
        a: "4",
        e: "3",
        i: "1",
        o: "0"
    };
    return string.replace(/a|e|i|o/gi, function (matched) {
        return mapObj[matched];
    });
}

// console.log(password("hola")) // "h0l4"
// console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
// console.log(password("")) // ""

// 21. Encontrar números pares en un arreglo

function pares(array) {
    const newArray = array.filter(valor => valor % 2 === 0)
    return newArray
}

// console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
// console.log(pares([])) // []

//22. Encontrar posiciones de números pares

function posiciones(array) {
    const arrFiltrado = array.filter((num, index) => index % 2 == 0)
    // const newArray = [...array]
    // if (newArray.indexOf(newArray.filter(valor => valor % 2 === 0))){
    //     return}
    return arrFiltrado

}

// console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// console.log(posiciones([])) // []

// 23. Duplicar elementos de un arreglo

function duplicar(array) {
    const arrFiltrado = array.map(valor => (valor * 2))
    return arrFiltrado
}


// console.log(duplicar([1, 2, 3])) // [2, 4, 6]
// console.log(duplicar([])) // []
// console.log(duplicar([4, 2, 3,7,3,5,6])) // [8,4,6,14,6,19,12]

// 24. Encontrar palabras que empiecen por "a"

function empiezanConA(array) {
    return array.filter(element => element.charAt(0) === "a" || element.charAt(0) === "A")
}

// console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
// console.log(empiezanConA(["beta", "delta", "gama"])) // []
// console.log(empiezanConA([])) // []

function terminanConS(array) {
    return array.filter(element => element.charAt(element.length - 1) === "s" || element.charAt(element.length - 1) === "S")
}

// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []

// 26. Imprimir una matriz

function imprimirMatriz(matriz) {
    matriz.forEach(array => {
        array.forEach(element => {
            console.log(element)
        });
    });
}

// console.log(imprimirMatriz([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]))  

//27. Traducir números a palabras

function numerosAPalabras(array) {
    const palabras = [ "cero", "uno", "dos", "tres", "cuatro", "cinco","seis", "siete","ocho","nueve"]
    return array.map(element => palabras[element])
    // console.log(palabras[9])


    array.forEach(element => {
        console.log(element)
    });

    const n = array.map(element => {
        const r = {
            name: element,
            posicion: element * 2
        }
        return r
    })

}

// console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
// console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

// 28. Traducir palabras a números

function palabrasANumeros(array){
    const palabras = [ "cero", "uno", "dos", "tres", "cuatro", "cinco","seis", "siete","ocho","nueve"]
    return array.map(palabra => {
        return palabras.findIndex(valor => valor === palabra)
    })
}

// console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
// console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

//29. Número de asteriscos en un arreglo

function numAsteriscos(){

}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0