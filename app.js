const bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
var schemas = require('./mongoSchema');
var pdf = require('./pdfDocument');
var email = require('./email');

const { json } = require('body-parser');
var Countries = schemas.Countries;
var Users = schemas.User;
var Place = schemas.Place;
var RecommendedTrips=schemas.RecommendedTrip;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))



pdf.createPdf();

app.get('/getListofTrainingNames',(req,res)=>{

    RecommendedTrips.find({},function(err,docs){
      console.log(docs);
      res.send(docs);
      
    })
})



//server runing and listen
app.listen(port, () => console.log(`Swimming Server listening on port ${port}!`))