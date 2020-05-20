 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master
var button = document.getElementById("def4")

button.addEventListener("click" ,function experiencia(Anos){
  var Anos = document.getElementById("inputDef4")
  let resposta = document.getElementById("resposta4")
  let anosEstudo = Anos.value;

  if(anosEstudo <= 1){
    resposta.innerHTML = "<h5>Dev Inicante</h5>"
  } else if(anosEstudo > 1 && anosEstudo <=3){
    resposta.innerHTML = "<h5>Dev Intermediário</h5>"
  } else if(anosEstudo > 3 && anosEstudo <=6){
    resposta.innerHTML = "<h5>Dev Avançado</h5>"
  } else{
    resposta.innerHTML = "<h5>Dev Jedi Master</h5>"
  }
 })