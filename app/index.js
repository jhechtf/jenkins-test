const express = require('express');
//Require express
const app = express();
//Create a new express app;
const port = process.env.NODE_ENV == 'development' ? 3000 : 80;

app.listen(port, (err)=>{
    if(err) {
        return console.log(err);
    }

    console.log("Server started on port ", port);
});

app.get('/', (req,res)=>{
    res.send('hello there!');
} );

app.get('other/route', (res,res)=>{
    res.send('hey');
})