let botao = document.getElementById("resposta1");

botao.addEventListener("click",()=>{
  let quadrado = document.getElementById("quadrado");
  let elemento = document.createElement("p");

  quadrado.appendChild(elemento);

  quadrado.style.display = "flex";

  elemento.style.backgroundColor = "#dfffaa";
  elemento.style.width = "100px";
  elemento.style.height = "100px";
  elemento.style.margin = "10px"
})