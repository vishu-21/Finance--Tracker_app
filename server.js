const path = require('path');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const server = express();

server.use(express.json());

if(process.env.NODE_ENV === 'development') {
    server.use(morgan('dev'));
}

server.use('/api/v1/transactions',transactions);


//static file
if(process.env.NODE_ENV==='production') {
 server.use(express.static('client/build'));

 server.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

const PORT = process.env.PORT || 8080;

server.listen(PORT , console.log(`server is running on ${PORT}`.blue.italic));