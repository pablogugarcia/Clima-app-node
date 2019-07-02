/*jshint esversion: 8*/
const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodeUrl = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '63e00cad51msh142564dd7980197p1b761cjsnf2e3bde0129a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLong
};