/*
var nome = "Douglas Araújo";
var idade = 29;
var idade2 = 10.5;
var frase = "Japão é o melhor time do mundo.";

//alert(nome + " tem " + idade + " anos.");

//alert(idade+idade2);
console.log(nome);
console.log(idade2+idade);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));
*/
/*
var lista = ["maça","pera","laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
*/

/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva",  cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[0].cor);
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

/*
for (count=0; count<=5; count++){
    alert(count);
}
*/
/*
var d= new Date();
alert(d.getMinutes());
*/

/*
function soma(n1,n2){
    return n1+n2;
}

alert(soma(5,10));

function mudar(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}

alert(mudar("Vai Japão", "Japão", "Brasil"));


function validaIdade(idade){
    var validar;

    if (idade >=18){
        validar = trune;
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

*/

function botao(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//    console.log(document.getElementById("Agradecimento"));
//    alert("Obrigado por clicar.");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar o texto.");
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";   
    document.getElementById("mousemove").innerHTML = "passe o mouse aqui";   
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}