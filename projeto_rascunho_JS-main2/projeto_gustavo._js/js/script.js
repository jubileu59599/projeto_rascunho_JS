var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função soma
  soma ();

});


//Função soma
function soma() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeira_nota = Number(document.getElementById("primeira_nota").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let segunda_nota = Number(document.getElementById("segunda_nota").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let terceira_nota = Number(document.getElementById("terceira_nota").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let quarta_nota = Number(document.getElementById("quarta_nota").value);

  //Realiza a soma do valor que está na variável "primeira_nota" com o valor que está na
  //variável "segunda_nota "
  //Realiza a soma do valor que está na variável "segunda_nota" com o valor que está na
  //variável "terceira_nota "
  //Realiza a soma do valor que está na variável "terceira_nota" com o valor que está na
  //variável "quarta_nota "
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_media = ( primeira_nota + segunda_nota + terceira_nota + quarta_nota ) /4 ;


  //Aqui vai escrever no input "resultado da media aritimetica :" o valor que está armazenado na variável "resultado da media aritimetica :"
  document.getElementById("resultado_da_media").value = resultado_media;


}
