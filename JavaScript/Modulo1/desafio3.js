var skills = ["Javascript", "ReactJS", "React Native"];
function temHabilidade(skills) {
  let resposta = document.getElementById("resposta3")
  
  return resposta.innerHTML = skills.indexOf("Javascript")
 }
temHabilidade(skills); 