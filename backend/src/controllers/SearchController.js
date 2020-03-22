const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){

        const { latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            }, 

            location: {
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })
        //Buscar em um raio de 10km
        //Buscar por tecnologias
        console.log(techsArray);
        console.log(devs);

        return response.json(devs);
    }
}