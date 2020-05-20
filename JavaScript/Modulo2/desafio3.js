let resposta = document.getElementById("resposta3")

var nomes = ["Diego", "Gabriel", "Lucas"];

for(let pessoa in nomes){
  let list = document.createElement("ul");

  resposta.appendChild(list)
  
  list.innerHTML = "<li>"+ nomes[pessoa] +"</li>"
}