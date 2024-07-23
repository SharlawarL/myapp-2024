const express = require("express");
const bodyParser = require('body-parser');
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json")

// Routes
const customerRout = require('./routes/customerRout')

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Welcome to node project");
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use('/api/customers', customerRout);

app.listen(3000, ()=>{
    console.log("Our application is started on 3000")
})