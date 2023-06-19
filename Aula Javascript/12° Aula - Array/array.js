//unidimensionais

// podemos criar vetores assim:
let num1 = new Array (30,-1,5,3,121);

// ou podemos fazer
let num2 = [-2,40,16,111,33,64];

console.log (num1)

//Acessando elementos diversos dos arrays ou vetores

console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);

//Acesseo terceiro elemento de num1
console.log(`terceiro elemento de num1: ${num1[2]}`)

//Acesse o quinto elemento de num2
console.log(`quinto elemento de num2
: ${num2[4]}`)

//Arrays bidimensionais

const matrix = [
     ['banana', 'maçã', 'pera'],
     ['laranja', true,1],
     [null, "uva", -350]
];

console.log (matrix);
console.log(matrix[0]);
console.log(matrix[0][1]);
console.clear();

//Altere um valor do array

let moedas = ['Real', 'Dolar', 'Coroa', 'Peso'];
console.log(moedas);
moedas[1] = 'Yen'
console.log(moedas);

let matrix2= [
    [1,2,3],
    [4,5,6],
]
matrix2 [0][1]=10;
console.log(matrix2);

//Tamanho de arrays
let vetor = [0,1,2,3,4];
console.log(vetor.length);

// Remover e/ou inserir elementos

//pop() <= Remover ultimo 
const frutas = ["laranja", "banana", "manga"];
let x = frutas.pop();

console.log(x)
console.clear()

//shift <= Remover o primeiro
let y = frutas.shift()
console.log(frutas);

//delete <= Remove quqlquer um
const veiculos = ["carro","barco","moto"]
delete veiculos[1];
console.log(veiculos)

//push adiciona 
let z = veiculos.push("avião")
console.log(veiculos)