const axios = require('axios');

const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
    }
}).argv;

// ubicacion.getCiudadLatLon(argv.nombre)
//     .then(console.log);

// clima.getClima(-0.19, -78.5)
//     .then(console.log);

const getInfo = async(ciudad) => {
    try {
        const temp = await clima.getClima(ciudad, "48eba3191a02169b9613f3adacc277cc");
        return `El clima de ${ ciudad } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}

getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);

module.exports = {
    getInfo
}