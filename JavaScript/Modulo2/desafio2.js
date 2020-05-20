let p = document.getElementById("p");
let quadrado = document.getElementById("quadrado");
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

quadrado.addEventListener("mouseover", ()=>{
  var newColor = getRandomColor();

  quadrado.style.backgroundColor = newColor;
})