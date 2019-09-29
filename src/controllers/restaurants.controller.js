const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const statistics = {};

statistics.main = async (req, res) => {
    try {
        function radians(x){
            let pi = Math.PI;
            return x * (pi / 180);
        }

        function avrg(x){
            let suma = x.reduce(function(sum, total){
                return sum + total;
            })
            let avrg = suma / x.length;
            return avrg;
        }

        function standDev(x){
            let avg = avrg(x);
            let sqrDif = x.map(function(y){
                let dif = y - avg;
                let sqrD = Math.pow(dif,2);
                return sqrD;
            });
            let avrgSqrDif = avrg(sqrDif);
            let standDev = Math.sqrt(avrgSqrDif);
            return standDev;
        }

        let latitud = req.query.latitude;
        let longitud = req.query.longitude;
        let radio = req.query.radius;
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest); 
        let allRest = [];
        let cont = 0;
        let avrgArray = [];
        let avg;
        let stdDev;
        let punto;

        allRest = await dbRest.get('restaurantes').value();
        for(i = 0; i < allRest.length; i++){
            punto = 6371 * Math.acos(Math.cos(radians(latitud)) * Math.cos(radians(allRest[i].lat)) * Math.cos(radians(allRest[i].lng) - radians(longitud)) + Math.sin(radians(latitud)) * Math.sin(radians(allRest[i].lat)));
            rad = radio / 1000;
            if(punto < rad){
                cont++;
                avrgArray[cont] = allRest[i].rating;
            }
        }

        avg = avrg(avrgArray);
        stdDev = standDev(avrgArray);

        res.send({
            estatus:[
                {
                    codigo: "200",
                    mensaje: "Solicitud procesada correctamente"
                }
            ],
            datos:[
                {
                    count: cont,
                    avg: avg,
                    std: stdDev
                }
            ]
        });

    }catch(error){
        res.send({
            estatus:[
                {
                    codigo: "400",
                    mensaje: error
                }
            ]
        });
    }
} 

module.exports = statistics;