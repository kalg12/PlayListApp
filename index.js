const express = require('express');
const app = express();

//Nos traemos PORT de la variable de entorno del archivo index.js de la carpeta config
const {port} = require('./config/index');

//Creamos un listen para que escuche en el puerto 4000 y nos retorne un mensaje
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Creamos una ruta get que nos devuelva en un JSON un Hola Mundo
app.get('/', (req, res) => {
    res.json({
        message: 'Hola Mundo'
    });
});