// Questão 10
// Dado o código abaixo, realize as seguintes alterações usando jQuery.
// 1 - Remova todas as classes do elemento "idPaciente" e de seu elemento pai;
// 2 - Adicione as classes "txtAzul" no elemento "idPaciente" e "fundoAzul" em seu elemento pai;
// 3 - Adicione o atributo "oninput" com a ação "contarLetras()" ao elemento "idPaciente" e remova o atributo "hidden" de seu elemento pai.
// OBS: Procure usar jQuery encadeado, de forma que todas as alterações sejam feitas em apenas 1 linha de código;


<div class="fundoVermelho" hidden>
   <input id="idPaciente" class="fundoVerde" />
</div>

$("div").removeClass("fundoVermelho").addClass("fundoAzul");
$("input").removeClass("fundoVerde").addClass("txtAzul");

document.querySelector("input #idPaciente").oninput = function contarLetras(e) {
   
   $("div").click(function () {
      $("fundoAzul").removeAttr("hidden");
   });

}