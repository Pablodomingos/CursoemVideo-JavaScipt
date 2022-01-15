var confirmacao;

confirmacao = window.prompt("Qual a seu nome ?");//Janela de pergunta
//window.alert("É um grande prazer em te conhecer" + confirmacao + "!");//Essa forma faz a concatenação. Não gosto muito
window.alert(`É um grande prazer em te conhecer ${confirmacao}!`);//Essa forma faz a interpolação. Gosto mais
