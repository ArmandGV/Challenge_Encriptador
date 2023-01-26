var encriptado = "";
var mensajes = document.querySelector('#mensaje');
let mensaje = "";
var mensajeCodificado = document.getElementById('mns-codificado');
var expreg = /([A-ZñÑáéíóúÁÉÍÓÚ$!°@|"#$%&/()='´+{}ü¨])\w+\W+|([A-ZñÑáéíóúÁÉÍÓÚ$!°@|"#$%&/()='´+{}ü¨])/g;
var alturaCodificador = document.getElementById('codificador');
var alturaCodificado = document.getElementById('codificado');
console.log(alturaCodificador.clientHeight);
function encriptar() {

    mensaje = mensajes.value;
   
    if (expreg.test(mensaje) == true) {
        alert("Tu mensaje tiene alguna mayuscula o acento favor de verificar");


    } else {
        mensajes.value = "";
        mensaje = mensaje.replaceAll('e', 'enter');
        mensaje = mensaje.replaceAll('i', 'imes');
        mensaje = mensaje.replaceAll('o', 'ober');
        mensaje = mensaje.replaceAll('a', 'ai');
        mensaje = mensaje.replaceAll('u', 'ufat');
        ocultar();
        imprimir(mensaje);
        mostar();
        modificarAltura();
    }
}

function modificarAltura(){
    
    if(alturaCodificador.clientHeight == 248){
        alturaCodificador.style.height = "300px";
        alturaCodificado.style.height = "280px";

    }else   if(alturaCodificador.clientHeight == 140){
        alturaCodificador.style.height = "550px";
        alturaCodificado.style.height = "550px";


    }

}
function copiar() {

    let copy = document.getElementById('mns-codificado');
    navigator.clipboard.writeText(copy.textContent);

}

function desencriptar() {

    mensaje = mensajes.value;
    mensajes.value = "";
    mensaje = mensaje.replaceAll('enter', 'e');
    mensaje = mensaje.replaceAll('imes', 'i');
    mensaje = mensaje.replaceAll('ober', 'o');
    mensaje = mensaje.replaceAll('ai', 'a');
    mensaje = mensaje.replaceAll('ufat', 'u');
    imprimir(mensaje);

}

function ocultar() {

    document.getElementById('muneco').style.display = 'none';
    document.getElementById('ingrese-mensaje').style.display = 'none';
    document.getElementById('ningun-mensaje').style.display = 'none';

}


function mostar() {

    let btnCopiar = document.getElementById('copiar');
    btnCopiar.style.display = 'block'

}


function imprimir(contenido) {
    mensajeCodificado.style.display = 'block';
    mensajeCodificado.innerHTML = contenido;


}


var btn1 = document.querySelector('.encriptar');
btn1.onclick = encriptar;

var btn2 = document.querySelector('.desencriptar');
btn2.onclick = desencriptar;

var copia = document.getElementById('copiar');
copia.onclick = copiar;
