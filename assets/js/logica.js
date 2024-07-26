function validarCorreo() {
    const correo = document.getElementById('correo').value;
    const contenido = document.getElementById("contenido");

    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        //alert('Correo electrónico válido');
        contenido.innerHTML = "Muchas gracias !!!, te contactaremos pronto!!";
    } else {
        //alert('Correo electrónico inválido');
        contenido.innerHTML = "Correo electrónico inválido";
    }
}

window.onload = function () {
    document.getElementById("validaButton").addEventListener("click", validarCorreo);
}