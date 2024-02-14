const express = require('express')
const cors= require('cors')
const {MongoClient} = require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.ujzztfu.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling2')
const col = db.collection('register')
col.insertOne({'student':"1617"})

app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})

app.get('/reterive',async(req,res)=>{
    const result = await col.find().toArray()
    console.log(result)
    res.send(result)
})
app.get('/', (req, res)=>{
    res.send('<h1>Hello klu</h1>')
})
app.get('/about', (req, res)=>{
    res.send('<h1> Hello This is about page</h1>')
})
app.get('/contact', (req, res)=>{
    res.send('<h1> Hello This is contact page</h1>')
})
app.get('/Home', (req, res)=>{
    res.send('<h1>Hello This is Homepage</h1>')
})
app.listen(8080, ()=>{console.log('Express server is running')})