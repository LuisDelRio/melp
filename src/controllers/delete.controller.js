const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const deleteOperation = {};

deleteOperation.main = async (req, res) => {
    try {
        let dent = req.body.dato[0];
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest);

        if(dent.rating != null){
            await dbRest.get('restaurantes').remove({'rating': dent.rating}).write();
        }else if(dent.name != null){
            await dbRest.get('restaurantes').remove({'name': dent.name}).write();
        }else if(dent.state != null){
            await dbRest.get('restaurantes').remove({'state': dent.state}).write();
        }else if(dent.city != null){
            await dbRest.get('restaurantes').remove({'city': dent.city}).write();
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