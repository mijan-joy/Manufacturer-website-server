const express=require('express');
const cors=require('cors');
const app=express();
const ObjectId = require("mongodb").ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port=process.env.PORT ||5000;

//  middlewares
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://dbuser1:<password>@cluster0.j1mjs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const serviceCollection = client.db("carTools").collection("service");
  // perform actions on the collection object
  client.close();
});
