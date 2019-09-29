const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const readOperation = {};

readOperation.main = async (req, res) => {
    try {
        let dent = req.body.dato[0];
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest);
        let allRest = [];

        if(dent.rating != null){
            allRest = await dbRest.get('restaurantes').filter({'rating': dent.rating}).value();
        }else if(dent.name != null){
            allRest = await dbRest.get('restaurantes').filter({'name': dent.name}).value();
        }else if(dent.state != null){
            allRest = await dbRest.get('restaurantes').filter({'state': dent.state}).value();
        }else if(dent.city != null){
            allRest = await dbRest.get('restaurantes').filter({'city': dent.city}).value();
        }else{
            allRest = await dbRest.get('restaurantes').value();
        }
        
        res.send({
            estatus:[
                {
                    codigo: "200",
                    mensaje: "Solicitud procesada correctamente"
                }
            ],
            datos:[
                {
                    Restaurantes: allRest
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

module.exports = readOperation;