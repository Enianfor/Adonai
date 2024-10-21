function APIvalidarCodigoBarras(codigoBarras) {
    fetch("http://192.168.0.13:8080/validar-codigo-barras", {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            codigoBarras: codigoBarras
        })
    })
    .then((res) => {
        // Verificar si la respuesta es exitosa (código 200-299)
        if (res.ok) {
            // Accedemos al texto que nos envia el servidor
            res.text()
                .then((data) => {
                    // Maneja la respuesta aquí
                    console.log("Respuesta del servidor:", data);
                })
        }
    })
        
}


function APIenviarNumero(usuario, contraseña, codigoBarras) {
    console.log("Se acaba de enviar datos")
    fetch(`http://192.168.0.13:8080/registrar-producto`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            contraseña: contraseña,
            codigoBarras: codigoBarras
        })
    })
    .then((res) => {
        // Verificar si la respuesta es exitosa (código 200-299)
        if (res.ok) {
            // Accedemos al texto que nos envia el servidor
            res.text()
                .then((data) => {
                    // Maneja la respuesta aquí
                    console.log("Respuesta del servidor:", data);
                })
        }
    })

}

APIenviarNumero("drako", "1234", 4444);
APIvalidarCodigoBarras(789798);
