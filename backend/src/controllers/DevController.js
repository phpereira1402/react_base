const axios = require('axios');//api
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');


//index -  mostrar lista
//show - unico
//store - criar
//update - alterar
//destroy 0 deletar

module.exports = {

    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);

    },

     

    async store(request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});
        
        if (!dev){
            const resp = await axios.get(`https://api.github.com/users/${github_username}`);//busca o usuário no github
        
            console.log(resp.data);
        
            const { name = login, avatar_url, bio} = resp.data;//pela desestruturação, se não exisitr o name, ele pega o login
            
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point', 
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username, 
                name, 
                avatar_url,
                bio,
                techs: techsArray,
                location
        
            });
        
            console.log(name, avatar_url, bio );

        }

        
        
        return response.json(dev);
    },

    // async update (request, response){
    //     return response.json({teste, '1'}); 
    // },
    // async delete (request, response){
    //     return response.json({teste, '1'}); 
    // }
}