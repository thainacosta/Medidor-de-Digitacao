var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#quantidadePalavras");
tamanhoFrase.text(numPalavras);
