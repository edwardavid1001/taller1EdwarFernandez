
function determinarTipoTriangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Los lados deben ser números positivos.");
        return;
    }

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert("No es un triángulo válido.");
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        alert("Es un triángulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Es un triángulo isósceles.");
    } else {
        alert("Es un triángulo escaleno.");
    }
}
