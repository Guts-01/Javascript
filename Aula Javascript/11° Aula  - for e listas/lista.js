let produto = document.getElementById("add")
function MINHAFUNCAO(){
    
    //criar um elemento li
    let li = document.createElement("li");
    
    //criar um texto
    let texto = document.createTextNode(produto.value)
    
    // vincular um texto ao elemento
    li.appendChild(texto)
    
    //adicionar o li na MINHALISTA
    document.getElementById("minhalista").appendChild(li)
}