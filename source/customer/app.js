const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request')
const PORT = 8080;

// SDK example
let key = "5c9676a997f01eb3d30e05167"
let word = "hello"
let urls = 'http://localhost:4000/engvies/'

app.get('/', (req,res)=>{

    request({
        url: urls + key +"/true/" + word,
        method: 'GET',
        timeout: 10000,
    },function(err,data,body) {
        
        console.log(data.body)
        res.json(data.body)

    })

})

//SDK NODEJS












app.use(bodyParser.json());
app.listen(PORT,()=> console.log('Listening on PORT '+ PORT))
