const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuidv1 = require('uuid/v1');
const createOperation = {};

createOperation.main = async (req, res) => {
    try {
        let dent = req.body.dato[0];
        let rest = await new FileSync('./db/restaurantes.json');
        let dbRest = low(rest);
        let allRest = [];
        let mid;

        do{
            mid = uuidv1();
            allRest = await dbRest.get('restaurantes').find({'id': mid}).value();
        }while(allRest);

        if (dent.rating < 0 || dent.rating > 4){
            throw "Rating debe estar entre 0 y 4";
        }

        await dbRest.get('restaurantes').push({
            "id": mid,
            "rating": parseInt(dent.rating,10),
            "name": dent.name,
            "site": dent.site,
            "email": dent.email,
            "phone": dent.phone,
            "street": dent.street,
            "city": dent.city,
            "state": dent.state,
            "lat": parseFloat(dent.lat),
            "lng": parseFloat(dent.lng)
        }).write();
        
        res.send({
            estatus:[
                {
                    codigo: "200",
                    mensaje: "Solicitud procesada correctamente"
                }
            ],
            datos:[
                {
                    id: mid
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

module.exports = createOperation;