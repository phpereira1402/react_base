const { Router } = require('express')

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController');

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


routes.get('/search', SearchController.index);


routes.get('/', (request, response) => {
    return response.json(
        {
            name: 'Paulo',
            message: 'Teste do Paulo 1'

        }
    );
})


routes.get('/users', (request, response) =>{
    return response.json(
        {
            name: 'Paulo',
            message: 'Teste do Paulo 1'

        }
    );
});


//Query Params:  request.query (Fltros, ordenação, paginação, )
//Route Params: request.params (identificar recurso para alteração ou remoção)
//Body Params: request.body (dados para alteração ou criação do registro)
//Usando mongo DB para testes. 

routes.put('/users/:id', (request, response) =>{
    console.log(request.query);
    return response.json(
        {
            name: 'Paulo',
            message: 'Teste do Paulo 1'

        }
    );
});

routes.post('/users', (request, response) =>{
    console.log('post');
    console.log(request.body);
    return response.json(
        {
            name: 'Paulo',
            message: 'Teste Post'

        }
    );
});

module.exports = routes;