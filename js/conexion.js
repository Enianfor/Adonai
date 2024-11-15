function APIvalidarCodigoBarras(codigoBarras) {
    try {
        fetch("http://192.168.1.3:8080/validar-codigo-barras", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                codigoBarras: codigoBarras
            })
        })
        .then((res) => {
            // Verificar si la respuesta es exitosa (código 200-299)
            if (res.ok) {
                return res.text();
            } else {
                throw new Error(`Error en la respuesta del servidor: ${res.status}`);
            }
        })
        .then((data) => {
            // Maneja la respuesta aquí
            console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
        });
    } catch (error) {
        console.error("Error en la función APIvalidarCodigoBarras:", error);
    }
}