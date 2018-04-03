const express = require('express');
//Require express
const app = express();
//Create a new express app;
const port = process.env.NODE_ENV == 'development' ? 3000 : 80;

const routes = require('./config/routes');

app.listen(port, (err)=>{
    if(err) {
        return console.log(err);
    }

    console.log("Server started on port ", port);
});

Object.keys(routes).forEach(route=>{
    app.get(route, routes[route]);
});