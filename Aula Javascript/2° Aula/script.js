var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");
var soma;

function SOMA() 
{
    soma = parseInt(n1.value) + parseInt(n2.value)
    resultado.innerHTML = soma;  
}
