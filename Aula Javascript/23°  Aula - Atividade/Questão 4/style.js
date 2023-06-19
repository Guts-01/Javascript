let nome = document.getElementById('nome');
let HTML = document.getElementById('HTML');
let css = document.getElementById('CSS');
let soma;
let java = document.getElementById('java');
let resultado = document.getElementById('resultado');
let aluno = document.getElementById('aluno');
let aprovacao = document.getElementById('aprovacao');


function DADOS(){
    soma = parseInt(HTML.value) + parseInt(css.value) + parseInt(java.value);
    resultado.innerHTML = soma/3;
    aluno.innerHTML = nome.value;
    
         if(soma/3 >= 7){
          aprovacao.innerHTML= ('Aprovado')
        }
        else{
            aprovacao.innerHTML = ('Reprovado')
        }
        
}
