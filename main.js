let cantGames=+prompt("Digite la cantidad de veces que quiere jugar");
let eleccionUser=+prompt("Digite la opcion 1. Piedra, 2. Papel y 3. Tijera");
let array=["piedra","papel","tijera"];
var indice = Math.floor(Math.random()*array.length); 
let resultado=array[indice];
