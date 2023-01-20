//server side

//setting up server

const {request, response} = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT||3000

//setting up database

const datastore = require('nedb');

const database = new datastore('database.db');
database.loadDatabase();


//starting up port for the app

app.listen(port, ()=>console.log(`Listining on port ${port}`));

app.use(express.static('public')); //folder name and webpage (ensure your file is index.html)
app.use(express.static('public/logs'));
app.use(express.json({limit:'1mb'}));

// //receiving data send from client side

app.post('/api', (request,response)=>{
    console.log('got a request');
    const data = request.body;

    const timeStamp = Date.now();
    data.timeStamp = timeStamp;

    // store data in a database.

    database.insert(data);

    console.log(data)

})

app.get('/api', (request, response)=>{
    database.find({}, (err, data)=>{
        if(err){
            response.end();
            return
        }
        response.json(data)
    })
})
