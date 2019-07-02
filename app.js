/*jshint esversion: 6 */
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima en ${coords.dir} es de ${temp}.`

    } catch (error) {
        return `No se pudo obtener el clima para ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);