var tempoInicial = $("#tempoDigitacao").text();
var campo = $(".campoDigitacao");

$(function(){
  console.log("carregou");
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botaoReiniciar").click(reiniciaJogo);
})

function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#quantidadePalavras");
  tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
  campo.on("input", function(){
    var conteudo = campo.val();
    var qtdePalavras = conteudo.split(/\s+/).length -1;
    $("#contadorPalavras").text(qtdePalavras);

    var qtdeCaracteres = conteudo.length;
    $("#qtdeCaracteres").text(qtdeCaracteres);
  });
}

function inicializaCronometro(){
  var tempoRestante = $("#tempoDigitacao").text();
  campo.one("focus",function(){
    var cronometroID = setInterval(function(){
      tempoRestante--;
      //console.log(tempoRestante);
      $("#tempoDigitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled",true);
        clearInterval(cronometroID);
        campo.addClass("campoDesativado");
      }
    },1000);
  });
}

function reiniciaJogo(){
  campo.attr("disabled",false);
  campo.val("");
  $("#qtdeCaracteres").text("0");
  $("#contadorPalavras").text("0");
  $("#tempoDigitacao").text(tempoInicial);
  inicializaCronometro();
}
