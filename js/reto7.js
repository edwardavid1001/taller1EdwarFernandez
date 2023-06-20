        function openModal() {
            document.getElementById("modal").style.display = "block";
        }

        function closeModal() {
            document.getElementById("modal").style.display = "none";
        }

        function validateForm() {
            // Reset error messages
            var errorFields = document.getElementsByClassName("error");
            for (var i = 0; i < errorFields.length; i++) {
                errorFields[i].textContent = "";
            }

            var tipoDocumento = document.getElementById("tipoDocumento").value;
            var numeroDocumento = document.getElementById("numeroDocumento").value;
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var fechaNacimiento = document.getElementById("fechaNacimiento").value;
            var correoElectronico = document.getElementById("correoElectronico").value;
            var password = document.getElementById("password").value;
            var confirmarPassword = document.getElementById("confirmarPassword").value;
            var terminosUso = document.getElementById("terminosUso").checked;

            var isValid = true;

            // Validaciones
            if (tipoDocumento === "") {
                document.getElementById("tipoDocumentoError").textContent = "Debe seleccionar un tipo de documento.";
                isValid = false;
            }

            if (numeroDocumento === "") {
                document.getElementById("numeroDocumentoError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (!/^[0-9]+$/.test(numeroDocumento) || numeroDocumento.length < 5) {
                document.getElementById("numeroDocumentoError").textContent = "El número de documento debe ser numérico y tener al menos 5 dígitos.";
                isValid = false;
            }

            if (nombre === "") {
                document.getElementById("nombreError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (!/^[a-zA-Z0-9\s]+$/.test(nombre)) {
                document.getElementById("nombreError").textContent = "El nombre solo puede contener letras y números.";
                isValid = false;
            }

            if (apellido === "") {
                document.getElementById("apellidoError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (!/^[a-zA-Z0-9\s]+$/.test(apellido)) {
                document.getElementById("apellidoError").textContent = "El apellido solo puede contener letras y números.";
                isValid = false;
            }

            if (fechaNacimiento === "") {
                document.getElementById("fechaNacimientoError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else {
                var fechaNacimientoDate = new Date(fechaNacimiento);
                var hoy = new Date();
                var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
                if (edad < 18) {
                    document.getElementById("fechaNacimientoError").textContent = "Debes ser mayor de 18 años para registrarte.";
                    isValid = false;
                }
            }

            if (correoElectronico === "") {
                document.getElementById("correoElectronicoError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (!correoElectronico.endsWith("@misena.edu.co")) {
                document.getElementById("correoElectronicoError").textContent = "El correo electrónico debe tener el dominio @misena.edu.co.";
                isValid = false;
            }

            if (password === "") {
                document.getElementById("passwordError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}/.test(password)) {
                document.getElementById("passwordError").textContent = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener al menos 10 caracteres.";
                isValid = false;
            }

            if (confirmarPassword === "") {
                document.getElementById("confirmarPasswordError").textContent = "Este campo es obligatorio.";
                isValid = false;
            } else if (password !== confirmarPassword) {
                document.getElementById("confirmarPasswordError").textContent = "La contraseña y su confirmación deben ser iguales.";
                isValid = false;
            }

            if (!terminosUso) {
                document.getElementById("terminosUsoError").textContent = "Debes aceptar los términos de uso.";
                isValid = false;
            }

            return isValid;
        }
 
