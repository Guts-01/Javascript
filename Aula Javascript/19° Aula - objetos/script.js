const pessoa =     
{
    primeironome: "Brunão",
    segundonome: "ruiz",
    id:335214,
    fullNome: function(){
        return this.primeironome + " " + this.segundonome
    }
}
//vetor
let cor = ["azul","vermelho"]

const tarefas = 
[
    {
        id: 1,
        texto: 'levar o lixo para fora',
        Completado: true,
    },
    {
        id: 2,
        texto: "encontrar com o chefe",
        Completado: true,
    },
    {
        id: 3,
        texto: 'consulta no dentista',
        Completado: true,
    }
]

tarefas.forEach(teste)

function teste(tarefas)
{
    console.log(tarefas.texto)
}