var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i<numeros.length; i++){
    if((numeros[i] %2) ==0){
        console.log(numeros[i] + " Este numero es par")
    }else{
        continue;
        console.log("Este numero no es par")
    }
}