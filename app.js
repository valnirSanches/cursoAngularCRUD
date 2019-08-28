const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const department_controller = require('./department_controller');
//const product_controller = require('./product_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
/*
mongoose.connect(
    'mongodb://localhost:27017/http_app', 
    {useNewUrlParser: true});
*/

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };
mongoose.connect('mongodb://root:example@db:27017/admin', options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});
mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
});


app.use('/departments', department_controller);
//app.use('/products', product_controller);


app.listen(9000);