const mongoose = require('mongoose');

// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://admin:admin000000@ds161134.mlab.com:61134/heroku_lxfx2pqk')
    .then(() => {

        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log('La conexión a MongoDB se ha realizado correctamente!!');
    })
    .catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error



