const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middleware
app.use(cors());
app.use(bodyParser.json());

//Importando as rotas
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Conexão com o DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true }, () => 
    console.log('Connected to DB!')
);

app.listen(3000);