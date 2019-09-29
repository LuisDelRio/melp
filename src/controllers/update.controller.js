const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const updateOperation = {};

updateOperation.main = async (req, res) => {
    try {
        async function updateRest(option,search,rating,name,site,email,phone,street,city,state,lat,lng){
            let rest = await new FileSync('./db/restaurantes.json');
            let dbRest = low(rest);
            let allRest = [];

            if(option === 1){
                allRest = await dbRest.get('restaurantes').filter({'rating': search}).value();
                for(i = 0; i < allRest.length; i++){
                    if(rating != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"rating": rating}).write();
                    }
                    if(name != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"name": name}).write();
                    }
                    if(site != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"site": site}).write();
                    }
                    if(email != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"email": email}).write();
                    }
                    if(phone != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"phone": phone}).write();
                    }
                    if(street != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"street": street}).write();
                    }
                    if(city != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"city": city}).write();
                    }
                    if(state != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"state": state}).write();
                    }
                    if(lat != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lat": lat}).write();
                    }
                    if(lng != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lng": lng}).write();
                    }
                }
            }else if(option === 2){
                allRest = await dbRest.get('restaurantes').filter({'name': search}).value();
                for(i = 0; i < allRest.length; i++){
                    if(rating != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"rating": rating}).write();
                    }
                    if(name != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"name": name}).write();
                    }
                    if(site != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"site": site}).write();
                    }
                    if(email != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"email": email}).write();
                    }
                    if(phone != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"phone": phone}).write();
                    }
                    if(street != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"street": street}).write();
                    }
                    if(city != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"city": city}).write();
                    }
                    if(state != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"state": state}).write();
                    }
                    if(lat != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lat": lat}).write();
                    }
                    if(lng != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lng": lng}).write();
                    }
                }
            }else if(option === 3){
                allRest = await dbRest.get('restaurantes').filter({'state': search}).value();
                for(i = 0; i < allRest.length; i++){
                    if(rating != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"rating": rating}).write();
                    }
                    if(name != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"name": name}).write();
                    }
                    if(site != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"site": site}).write();
                    }
                    if(email != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"email": email}).write();
                    }
                    if(phone != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"phone": phone}).write();
                    }
                    if(street != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"street": street}).write();
                    }
                    if(city != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"city": city}).write();
                    }
                    if(state != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"state": state}).write();
                    }
                    if(lat != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lat": lat}).write();
                    }
                    if(lng != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lng": lng}).write();
                    }
                }
            }else if(option === 4){
                allRest = await dbRest.get('restaurantes').filter({'city': search}).value();
                for(i = 0; i < allRest.length; i++){
                    if(rating != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"rating": rating}).write();
                    }
                    if(name != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"name": name}).write();
                    }
                    if(site != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"site": site}).write();
                    }
                    if(email != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"email": email}).write();
                    }
                    if(phone != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"phone": phone}).write();
                    }
                    if(street != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"street": street}).write();
                    }
                    if(city != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"city": city}).write();
                    }
                    if(state != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"state": state}).write();
                    }
                    if(lat != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lat": lat}).write();
                    }
                    if(lng != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lng": lng}).write();
                    }
                }
            }else if(option === 5){
                allRest = await dbRest.get('restaurantes').value();
                for(i = 0; i < allRest.length; i++){
                    if(rating != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"rating": rating}).write();
                    }
                    if(name != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"name": name}).write();
                    }
                    if(site != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"site": site}).write();
                    }
                    if(email != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"email": email}).write();
                    }
                    if(phone != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"phone": phone}).write();
                    }
                    if(street != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"street": street}).write();
                    }
                    if(city != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"city": city}).write();
                    }
                    if(state != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"state": state}).write();
                    }
                    if(lat != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lat": lat}).write();
                    }
                    if(lng != null){
                        await dbRest.get('restaurantes').find({'id': allRest[i].id}).assign({"lng": lng}).write();
                    }
                }
            }

            return allRest;
        }

        let dent = req.body.dato[0];
        let dupdate = req.body.update[0];
        let all = [];

        if(dent.rating != null){
            all = await updateRest(1,dent.rating,dupdate.rating,dupdate.name,dupdate.site,dupdate.email,dupdate.phone,dupdate.street,dupdate.city,dupdate.state,dupdate.lat,dupdate.lng);
        }else if(dent.name != null){
            all = await updateRest(2,dent.name,dupdate.rating,dupdate.name,dupdate.site,dupdate.email,dupdate.phone,dupdate.street,dupdate.city,dupdate.state,dupdate.lat,dupdate.lng);
        }else if(dent.state != null){
            all = await updateRest(3,dent.state,dupdate.rating,dupdate.name,dupdate.site,dupdate.email,dupdate.phone,dupdate.street,dupdate.city,dupdate.state,dupdate.lat,dupdate.lng);
        }else if(dent.city != null){
            all = await updateRest(4,dent.city,dupdate.rating,dupdate.name,dupdate.site,dupdate.email,dupdate.phone,dupdate.street,dupdate.city,dupdate.state,dupdate.lat,dupdate.lng);
        }else if(dent.length === undefined){
            all = await updateRest(5,dent.rating,dupdate.rating,dupdate.name,dupdate.site,dupdate.email,dupdate.phone,dupdate.street,dupdate.city,dupdate.state,dupdate.lat,dupdate.lng);
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
                    Restaurantes: all
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

module.exports = updateOperation;