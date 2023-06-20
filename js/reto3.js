
function convertirTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    var resultado;

    if (from === "celsius") {
        if (to === "fahrenheit") {
            resultado = (temperatura * 9 / 5) + 32;
        } else if (to === "kelvin") {
            resultado = temperatura + 273.15;
        }
    } else if (from === "fahrenheit") {
        if (to === "celsius") {
            resultado = (temperatura - 32) * 5 / 9;
        } else if (to === "kelvin") {
            resultado = (temperatura + 459.67) * 5 / 9;
        }
    } else if (from === "kelvin") {
        if (to === "celsius") {
            resultado = temperatura - 273.15;
        } else if (to === "fahrenheit") {
            resultado = (temperatura * 9 / 5) - 459.67;
        }
    }

    resultado = resultado.toFixed(2);

    alert("El resultado de la conversion es: " + resultado);
}
