const express = require('express');
const app = express();
const clima = require('./controlador/clima')
const axios = require('axios');
const hbs = require('hbs');
require('./hbs/helpers');

const getClima = async(ciudad) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=48eba3191a02169b9613f3adacc277cc`);
    const val = resp.data.main.temp - 273.15
    return val;
}

const c_quito = getClima("Quito")
console.log(c_quito);

const c_guayaquil = clima.getClima("Guayaquil")


const c_madrid = clima.getClima("Madrid")


const c_paris = clima.getClima("Paris")




const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Anthony Cárdenas",
        quito: c_quito,
        guayaquil: c_guayaquil
    });
});

app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about', {
        madrid: c_madrid,
        paris: c_paris


    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});