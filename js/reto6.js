// Funciones para mostrar y ocultar las ventanas modales
function mostrarModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function cerrarModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Eventos de clic para abrir y cerrar las ventanas modales
document.getElementById("btnCalcAreaCirculo").addEventListener("click", function() {
  mostrarModal("modalAreaCirculo");
});

document.getElementsByClassName("cerrarModalAreaCirculo")[0].addEventListener("click", function() {
  cerrarModal("modalAreaCirculo");
});

document.getElementById("btnCalcPerimetroCirculo").addEventListener("click", function() {
  mostrarModal("modalPerimetroCirculo");
});

document.getElementsByClassName("cerrarModalPerimetroCirculo")[0].addEventListener("click", function() {
  cerrarModal("modalPerimetroCirculo");
});

document.getElementById("btnCalcAreaTriangulo").addEventListener("click", function() {
  mostrarModal("modalAreaTriangulo");
});

document.getElementsByClassName("cerrarModalAreaTriangulo")[0].addEventListener("click", function() {
  cerrarModal("modalAreaTriangulo");
});

document.getElementById("btnCalcPerimetroTriangulo").addEventListener("click", function() {
  mostrarModal("modalPerimetroTriangulo");
});

document.getElementsByClassName("cerrarModalPerimetroTriangulo")[0].addEventListener("click", function() {
  cerrarModal("modalPerimetroTriangulo");
});

document.getElementById("btnCalcAreaRectangulo").addEventListener("click", function() {
  mostrarModal("modalAreaRectangulo");
});

document.getElementsByClassName("cerrarModalAreaRectangulo")[0].addEventListener("click", function() {
  cerrarModal("modalAreaRectangulo");
});

document.getElementById("btnCalcPerimetroRectangulo").addEventListener("click", function() {
  mostrarModal("modalPerimetroRectangulo");
});

document.getElementsByClassName("cerrarModalPerimetroRectangulo")[0].addEventListener("click", function() {
  cerrarModal("modalPerimetroRectangulo");
});

document.getElementById("btnCalcAreaCuadrado").addEventListener("click", function() {
  mostrarModal("modalAreaCuadrado");
});

document.getElementsByClassName("cerrarModalAreaCuadrado")[0].addEventListener("click", function() {
  cerrarModal("modalAreaCuadrado");
});

document.getElementById("btnCalcPerimetroCuadrado").addEventListener("click", function() {
  mostrarModal("modalPerimetroCuadrado");
});

document.getElementsByClassName("cerrarModalPerimetroCuadrado")[0].addEventListener("click", function() {
  cerrarModal("modalPerimetroCuadrado");
});

// Funciones de cálculo de áreas y perímetros
function calcularAreaCirculo() {
  let radio = parseFloat(document.getElementById("radioCirculo").value);
  let area = Math.PI * Math.pow(radio, 2);
  document.getElementById("resultAreaCirculo").innerHTML = "El área es: " + area.toFixed(2);
}

function calcularPerimetroCirculo() {
  let radio = parseFloat(document.getElementById("radioCirculoP").value);
  let perimetro = 2 * Math.PI * radio;
  document.getElementById("resultPerimetroCirculo").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
}

function calcularAreaTriangulo() {
  let base = parseFloat(document.getElementById("baseTriangulo").value);
  let altura = parseFloat(document.getElementById("alturaTriangulo").value);
  let area = (base * altura) / 2;
  document.getElementById("resultAreaTriangulo").innerHTML = "El área es: " + area.toFixed(2);
}

function calcularPerimetroTriangulo() {
  let lado1 = parseFloat(document.getElementById("lado1Triangulo").value);
  let lado2 = parseFloat(document.getElementById("lado2Triangulo").value);
  let lado3 = parseFloat(document.getElementById("lado3Triangulo").value);
  let perimetro = lado1 + lado2 + lado3;
  document.getElementById("resultPerimetroTriangulo").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
}

function calcularAreaRectangulo() {
  let base = parseFloat(document.getElementById("baseRectangulo").value);
  let altura = parseFloat(document.getElementById("alturaRectangulo").value);
  let area = base * altura;
  document.getElementById("resultAreaRectangulo").innerHTML = "El área es: " + area.toFixed(2);
}

function calcularPerimetroRectangulo() {
  let lado1 = parseFloat(document.getElementById("lado1Rectangulo").value);
  let lado2 = parseFloat(document.getElementById("lado2Rectangulo").value);
  let perimetro = 2 * (lado1 + lado2);
  document.getElementById("resultPerimetroRectangulo").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
}

function calcularAreaCuadrado() {
  let lado = parseFloat(document.getElementById("ladoCuadrado").value);
  let area = Math.pow(lado, 2);
  document.getElementById("resultAreaCuadrado").innerHTML = "El área es: " + area.toFixed(2);
}

function calcularPerimetroCuadrado() {
  let lado = parseFloat(document.getElementById("ladoCuadradoP").value);
  let perimetro = 4 * lado;
  document.getElementById("resultPerimetroCuadrado").innerHTML = "El perímetro es: " + perimetro.toFixed(2);
}





document.getElementById("btnAreaCirculo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularAreaCirculo();
});

document.getElementById("btnPerimetroCirculo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularPerimetroCirculo();
});

document.getElementById("btnAreaTriangulo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularAreaTriangulo();
});


document.getElementById("btnPerimetroTriangulo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularPerimetroTriangulo();
});


document.getElementById("btnAreaRectangulo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularAreaRectangulo();
});

document.getElementById("btnPerimetroRectangulo").addEventListener("click", function(event) {
  event.preventDefault();
  calcularPerimetroRectangulo();
});

document.getElementById("btnAreaCuadrado").addEventListener("click", function(event) {
  event.preventDefault();
  calcularAreaCuadrado();
});

document.getElementById("btnPerimetroCuadrado").addEventListener("click", function(event) {
  event.preventDefault();
  calcularPerimetroCuadrado();
});
