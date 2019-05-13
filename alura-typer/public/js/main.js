var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#quantidadePalavras");
tamanhoFrase.text(numPalavras);

var campo = $(".campoDigitacao");
campo.on("input", function(){
  var conteudo = campo.val();
  var qtdePalavras = conteudo.split(/\s+/).length -1;
  $("#contadorPalavras").text(qtdePalavras);

  var qtdeCaracteres = conteudo.length;
  $("#qtdeCaracteres").text(qtdeCaracteres);
});
