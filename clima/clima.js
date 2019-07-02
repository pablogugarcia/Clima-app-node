/* jshint esversion: 8*/

const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f9b6e97de3d64ff7b57d29aa499ff39e&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};