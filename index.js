const h1 = document.querySelector("h1");

const input1 = document.querySelector("#calculo");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const presultado = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  const resultado = parseInt(input1.value) + parseInt(input2.value);
  presultado.innerText = "El resultado de tu suma es: " + resultado;
}
