const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const deleteOperation = {};

deleteOperation.main = async (req, res) => {
    try {
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest);

        if(req.query.rating != null){
            await dbRest.get('restaurantes').remove({'rating': parseInt(req.query.rating)}).write();
        }else if(req.query.name != null){
            await dbRest.get('restaurantes').remove({'name': req.query.name}).write();
        }else if(req.query.state != null){
            await dbRest.get('restaurantes').remove({'state': req.query.state}).write();
        }else if(req.query.city != null){
            await dbRest.get('restaurantes').remove({'city': req.query.city}).write();
        }else{
            await dbRest.get('restaurantes').remove().write();
        }
        
        res.send({
            estatus:[
                {
                    codigo: "200",
                    mensaje: "Solicitud procesada correctamente"
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

module.exports = deleteOperation;