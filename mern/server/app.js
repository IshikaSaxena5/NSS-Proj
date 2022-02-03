const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
// const cors = require('cors');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
// const paymentRoute = require('./paymentRoute')
const app = express();
require('./db/connection');
app.use(cookieParser())
dotenv.config({path:'./config.env'});
app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;



const middleware = (req,res, next)=>{
  console.log(`hello my middleware`);
  next();
}/*
app.get('/',(req,res) =>{
  res.send(`hello world from home`);
 
});
app.get('/aboutme',middleware,(req,res) =>{
    res.send(`hello world from aboutme`);
  });
  app.get('/contact',(req,res) =>{
    res.send(`hello world from contact`);
  });
  app.get('/login',(req,res) =>{
    res.send(`hello world from login`);
  });
  app.get('/register',(req,res) =>{
    res.send(`hello world from register`);
  });*/
  // app.use(cors())
  // app.use(bodyParser.json())
  // app.use('/api',paymentRoute)

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});