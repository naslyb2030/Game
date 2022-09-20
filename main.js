let n=0, victoriasUser=0,victoriasPc=0,empates=0;
let cantGames=+prompt("Digite la cantidad de veces que quiere jugar");
while (n<cantGames) {
    let eleccionUser=+prompt("Digite la opcion \n 1. Piedra. \n 2. Papel. \n 3. Tijera");
    function eleccion(){
        var eleccion = Math.floor(Math.random()*3+1);
        return eleccion;
    }
    let eleccionPc=eleccion();
    
   function consulta(eleccionUser,eleccionPc){
    if (eleccionUser===eleccionPc) {
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
   }
   consulta(eleccionUser,eleccionPc);
    n++;
}

function winner(victoriasUser,victoriasPc){
    if (victoriasPc>victoriasUser) return "Ganador: PC"
    if (victoriasUser>victoriasPc) return "Ganador: Usuario"
    if (victoriasUser==victoriasPc) return "Hay un empate"
}
alert(winner(victoriasUser,victoriasPc)+"\n Victorias Pc "+victoriasPc+" \n Victorias Usuario "+victoriasUser+"\n Empates "+empates)



