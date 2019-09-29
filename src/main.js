const express = require('express');
const api = express();
const CSVtoJSON = require('csvtojson');
var fs = require('fs');

//Settings
api.set('port',process.env.PORT || 3000);
api.use(express.json());

//Routes
api.use('/crudOperations',require('./routes/crudOperations.routes'));
api.use('/restaurants',require('./routes/restaurants.routes'));

//Start server
api.listen(api.get('port'), () =>{
    CSVtoJSON().fromFile('./restaurantes.csv').then(restaurantes => {
        for(i = 0; i < restaurantes.length; i++){
            restaurantes[i].rating = parseInt(restaurantes[i].rating,10);
            restaurantes[i].lat    = parseFloat(restaurantes[i].lat);
            restaurantes[i].lng    = parseFloat(restaurantes[i].lng);
        }
        fs.writeFile('./db/restaurantes.json', `{"restaurantes" : ${JSON.stringify(restaurantes)}}`, (err) => {
            if (!err) {
                console.log('JSON creado correctamente...');
            } else {
                console.log(err);
            }
        });
    });
    console.log('Servido funcionando en puerto: ' + api.get('port'));
});