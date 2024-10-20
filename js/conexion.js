function APIunirseAlJuego() {
    fetch("http://192.168.0.13:8080/unirse")
        .then((res) => {
            if(res.ok) {
                res.text()
                    .then((respuesta) => {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}


function APIseleccionarMokeponBackend(mascotaDelJugador) {
    fetch(`http://192.168.0.13:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaDelJugador
        })
    })
}