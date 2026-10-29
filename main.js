//funções indentificador() {}

/*
função é uma parte do codigo que pode ser reutilizada
como por exemplo abaixo, tudo que estiver dentro da funcao ola
sera executado, quando chamamos a funcao, ai podemos utilizar o mesmo
codigo varias vezes, chamando a funcao, sem precisar escrever tudo
o codigo dnv
*/


function fnValidarVogal(){
    var vogal = document.getElementById("vogalUsuario").value

    switch (vogal){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("você digitou uma vogal")
            break;
        default:
            alert("você digitou uma consoante")
            break;
        
    }
}

function ola() {
    console.log("Seja bem vindo a sala de aula!");
}

ola() //chamando o codigo que ta dentro da função ola - 1x
ola() //chamando o codigo que ta dentro da função ola - 2x

function fnValidarIdade(){
    var idade = document.getElementById("inputIdade").value

    if (idade >= 18){
        alert("Você pode dirigir")
    }else alert("Você não pode dirigir")
}

