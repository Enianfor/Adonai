const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.static(`public`))
app.use(cors())
app.use(express.json())


app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`
  const jugador = new Jugador(id)

  jugadores.push(jugador)

  res.setHeader("Access-Control-Allow-Origin", "*")

  res.send(id)
})

// Ruta para recibir un número
app.post('/numero', (req, res) => {
  const { numero } = req.body;

  //Validación: Se verifica si el número es válido (no nulo y de tipo número). 
  //Si no es válido, se devuelve un error 400 con un mensaje de error.

  if (!numero || typeof numero!== 'number') {    
    return res.status(400).json({ error: 'Debe proporcionar un número válido' });
  }

  // Procesa el número aquí
  console.log(`Número recibido: ${numero}`);

  // Responde con un mensaje de confirmación
  res.json({ mensaje: `Número recibido correctamente: ${numero}` });
});

app.listen(9090, ()=>{
    console.log("Servidor Adonai en línea")
})



