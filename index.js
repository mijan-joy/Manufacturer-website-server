const express=require('express');
const cors=require('cors');
const app=express();
require('dotenv').config();
const port=process.env.PORT ||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//  middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bv0uy.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
await client.connect();
const serviceCollection = client.db("carBiz").collection("service");

app.get("/service", async(req, res)=>{
const query={}
const cursor=serviceCollection.find(query);
const services=await cursor.toArray()
res.send(services)
})

//..........................Create(C):(POST)...........................//

// Create (POST)
app.post("/service",async(req, res) => {
    const serv=req.body;
    const result=await serviceCollection.insertOne(serv);
    res.json(result);

})

    }
    finally{

    }


}
run().catch(console.dir);


app.get('/',(req, res) => {
    res.send("Running my manufacturer website")
})

app.listen(port,()=>{
    console.log("Listening on port",port);
    })
    