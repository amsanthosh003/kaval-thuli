const express = require("express");
const server = express();
const bodyParser=require('body-parser');  //to parese the req.body.property

 const config=require("./../config/config.json")
var cors = require('cors')
var mongoose = require('mongoose');
server.use(bodyParser.json());
server.use(cors())


const adminRouter = require('./../router/admin');
const cityRouter = require('./../router/city');
const newsRouter = require('./../router/news');
const tipsRouter = require('./../router/tips');
const reporterRouter = require('./../router/reporter');
const userRouter = require('./../router/user');
const notificationRouter = require('./../router/notification');

let db= process.env.MONGODB_URL ||'mongodb+srv://santhosh:Santhosh333@cluster-kavalthuli.hvshw.mongodb.net/Kaval-thuli?retryWrites=true&w=majority';

console.log('connected to the dataabase',db);

mongoose.connect(db, {  useUnifiedTopology: true,  useNewUrlParser: true },function(error)
{
        if(error)
        {
        console.log(error);
        }
        else
        {
        console.log('connected to the database santhosh',db);
        }
	});


    server.use("/admin",adminRouter);
    server.use("/city",cityRouter);
    server.use("/news",newsRouter);
    server.use("/tips",tipsRouter);
    server.use("/reporter",reporterRouter);
    server.use("/user",userRouter);
    server.use("/notification",notificationRouter);

 module.exports= server;