const contar = document.getElementById("count");
const mostrar = document.getElementById("show");
let numero = 0;


function conta() {
    numero++;
    contar.innerText = "numero atual: " + numero;
    mostrar.innerText = numero;

}
