const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const readOperation = {};

readOperation.main = async (req, res) => {
    try {
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest);
        let allRest = [];

        if(req.query.rating != null){
            allRest = await dbRest.get('restaurantes').filter({'rating': parseInt(req.query.rating)}).value();
        }else if(req.query.name != null){
            allRest = await dbRest.get('restaurantes').filter({'name': req.query.name}).value();
        }else if(req.query.state != null){
            allRest = await dbRest.get('restaurantes').filter({'state': req.query.state}).value();
        }else if(req.query.city != null){
            allRest = await dbRest.get('restaurantes').filter({'city': req.query.city}).value();
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