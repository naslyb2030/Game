let n=0, victoriasUser=0,victoriasPc=0,empates=0;
let cantGames=+prompt("Digite la cantidad de veces que quiere jugar");
while (n<cantGames) {
    let eleccionUser=+prompt("Digite la opcion \n 1. Piedra. \n 2. Papel. \n 3. Tijera");
    var eleccionPc = Math.floor(Math.random()*3+1); 
    if ((eleccionUser===1&&eleccionPc===1)||(eleccionUser===2&&eleccionPc===2)||(eleccionUser===3&&eleccionPc===3)) {
        alert("Empate")
        empates++;
    }
    if ((eleccionUser===1&&eleccionPc===2)||(eleccionUser===2&&eleccionPc===3)||(eleccionUser===3&&eleccionPc===1)) {
        alert("Gana Pc")
        victoriasPc++;
    }
    if ((eleccionUser===1&&eleccionPc===3)||(eleccionUser===2&&eleccionPc===1)||(eleccionUser===3&&eleccionPc===2)) {
        alert("Gana Usuario")
        victoriasUser++;
    }
    n++;
}
if (victoriasPc>victoriasUser) {
    alert("El ganador es el PC. \n Rondas jugadas "+cantGames+"\n Victorias Pc "+victoriasPc+" \n Victorias Usuario "+victoriasUser+"\n Empates "+empates)

}
if (victoriasUser>victoriasPc) {
    alert("El ganador es el Usuario. \n Rondas jugadas "+cantGames+"\n Victorias Pc "+victoriasPc+" \n Victorias Usuario "+victoriasUser+"\n Empates "+empates)
}
if (victoriasUser==victoriasPc) {
    alert("Hay un empate. \n Rondas jugadas "+cantGames+"\n Victorias Pc "+victoriasPc+" \n Victorias Usuario "+victoriasUser+"\n Empates "+empates)
}


