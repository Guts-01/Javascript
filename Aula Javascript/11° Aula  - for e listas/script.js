let x = document.getElementById("valorinicio");
let y = document.getElementById("valorfinal");

function CONTAR(){  
    while (parseInt(x.value) <= parseInt(y.value))
    {
        // criar um elemento p (para criar um elemento, use createElement ("nome do elemento"))
        let paragrafo = document.createElement("p")
    
        // criar um texto (para criar um texto, use createElement ("nome do texto"))
        let texto = document.createTextNode(x.value)
    
        //adicionar um texto no elemento (para vincular um texto ao elemento, use (nome da variavel'.appendChild(nome da variavel)))
        paragrafo.appendChild(texto);
    
        //adicionar o elemento no section
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x)
        x.value++ // (x = x + 1)
    }
}