const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const sResult = document.querySelector("#resultado");

btn.addEventListener("click", suma);

function suma() {
  // Obtener los valores ingresados en los inputs
  let calculo1 = parseFloat(document.getElementById("calculo2").value);
  let calculo2 = parseFloat(document.getElementById("calculo2").value);

  // Sumar los valores
  let resultado = calculo1 + calculo2;

  //Mostrar el resultado
  document.getElementById("resultado").textContent = resultado;
}
