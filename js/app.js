let numeroAdivinar = 0;
let formulario = document.querySelector("#formulario")

formulario.addEventListener("submit" , adivinar)
function playGame(){
    numeroAdivinar = Math.floor(Math.random() * (50 - 1 + 1)+ 1);
    console.log(numeroAdivinar)
}

function adivinar(e){
    e.preventDefault();
    let numeroIngresado = document.querySelector("#inputAdivinar").value;
    if(numeroIngresado == numeroAdivinar){
        alert("You Win!")
    }else if(numeroAdivinar < numeroIngresado){
        alert("You Lose! tu número " + numeroIngresado + " es mayor al número mágico")
    }else{
        alert("You Lose! tu número " + numeroIngresado + " es mmenor al número mágico")
    }
}