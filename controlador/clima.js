const axios = require('axios');

const getClima = async(ciudad, apiweather) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiweather}`);
    const val = float(resp.data.main.temp) - 273.15
    return val;
}

//48eba3191a02169b9613f3adacc277cc
module.exports = {
    getClima
}