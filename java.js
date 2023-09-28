/*Iniciando em javascript*/
console.log("Olá, Mundo!");

/*Variáveis e Tipos de Dados
javascript*/

// Declarando variáveis
var nome = "João";
let idade = 25;
const PI = 3.1416;

// Tipos de dados
let numero = 42;               // Número
let texto = "Olá, mundo!";     // String
let isVerdadeiro = true;       // Booleano
let array = [1, 2, 3, 4, 5];   // Array
let objeto = {nome: "Maria", idade: 30}; // Objeto

/*Estruturas de Controle de Fluxo*/

// Condicional
if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
  
  // Loop
  for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
  }
  
  // Função
  function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  saudacao("Ana");
  
  /*Manipulação de DOM (Document Object Model)*/

  // Selecionando um elemento do HTML
let elemento = document.getElementById("meuElemento");

// Alterando o conteúdo do elemento
elemento.innerHTML = "Novo conteúdo";

// Adicionando um evento de clique
elemento.addEventListener("click", function() {
  alert("Clicou no elemento!");
});

/*Requisição AJAX (Assíncrona)*/

// Requisição AJAX com XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let resposta = JSON.parse(xhr.responseText);
    console.log(resposta);
  }
};

xhr.send();

/*Promises (Promessas) e Fetch API*/

// Usando Fetch API com Promises
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro na requisição.");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
