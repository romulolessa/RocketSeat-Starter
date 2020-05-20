let resposta = document.getElementById("resposta5")
var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];
 for (const valor of usuarios) 
  resposta.innerHTML = "O "+ valor.nome + " possui as habilidades: " + valor.habilidades.join(", ")