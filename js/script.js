const botonResumen = document.getElementById("resumen");



botonResumen.onclick = () => {
    const valorEntrada = 200;
    const correo = document.getElementById("correo").value;
    const cantidad = document.getElementById("Cantidad").value;
    const categoria = document.getElementById("Categoria").value;
    const valorInput = document.getElementById("valorInput");
    const nombre = document.getElementById("nombreUsuario")
    const apellido = document.getElementById("apellidoUsuario")

    let total;
    let descuento;

    if (categoria == "Estudiante") {
        descuento = cantidad * ( valorEntrada * 0.8)
        console.log(total)
    } else if (categoria == "Trainee") {
        descuento = cantidad * (valorEntrada * 0.5);
    } else if (categoria == "Junior") {
        descuento = cantidad * (valorEntrada * 0.15);
    }

    total = valorEntrada * cantidad - descuento;

    const mensaje = `Hola, ${nombre.value} ${apellido.value}, el total a pagar es: ${total}. Te enviaremos un mail a: ${correo}`;
    valorInput.innerHTML = mensaje;

};