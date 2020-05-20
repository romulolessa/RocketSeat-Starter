var enviar= document.getElementById("enviar");
var resposta = document.getElementById("respsotafinal2")
var par = []
enviar.addEventListener("click", function pares(x, y){
  x = document.getElementById("inicio");
  y = document.getElementById("final");
  valor1 = x.value;
  valor2 = y.value;

  for(var i = valor1; i < valor2; i++){
    if(i % 2 == 0 ){
      par.push(i)
    }
  }
  let lista = document.getElementById("lista");
  par.forEach((elemento)=>{
    let item = document.createElement("li");
    
    item.appendChild(document.createTextNode(elemento));
    return lista.appendChild(item)
    
  });
})