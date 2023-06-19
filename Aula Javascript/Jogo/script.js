let vidadoheroi;
let ataquedoheroi
let xpheroi;
let niveldoheroi;
let classesdosherois = ["Mago", "Ninja", "Viking"];
let nomedoheroi;
let mensagemdonome

nomedoheroi = document.getElementById("nomedopersonagem");
mensagemdonome = document.getElementById("mensagem");

function ENVIAR(){
    if(nomedoheroi.value != "")
        mensagemdonome.innerHTML = "Olá, " + nomedoheroi.value + " Seja bem vindo ao jogo" 
    
    else{
        mensagemdonome.innerHTML = "Digite seu nome para iniciar o jogo"
    }

}