let resposta4 = document.getElementById("resposta4")
function adicionar(){
  let texto = document.getElementById("nome")
  let textvalue = [texto.value]

  for(let iten in textvalue){
  let list = document.createElement("ul")
  
  resposta4.appendChild(list)

  list.innerHTML = "<li>"+ textvalue[iten] +"</li>"
  }
}