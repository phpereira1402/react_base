const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://phpereira1402:@cn0007!@cluster0-ldvlv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//app.use(cors({ origin : 'http://localhost:3000' }));
app.use(cors());
app.use(express.json());//Identifico para usar o json
app.use(routes); //improtando rotas que foi exportada...
app.listen(3333);// porta que será acessada