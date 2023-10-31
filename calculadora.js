let display = document.getElementById("display");
let numero = document.querySelectorAll("[id*=tecla]");
let operador = document.querySelectorAll("[id*=operador]");
let operadores;
let numeroanterior

let inserinumero = (evento) => atualizardisplay(evento.target.textcontent);

let inserioperador = (evento) => {
novonumero = true;
operador = evento.target.textContent;
numeroanterior = display.textContent;
}

let novonumero = true;

let atualizardisplay = (texto) => {
    if (novonumero){
        display.textContent = texto;
        novonumero= false;
    }else{
        display.textContent += texto;
    }
}

numero.forEach(numero => numero. addEventListener("click", inserinumero));
operador.forEach(operador => operador. addEventListener("click", inserioperador));
