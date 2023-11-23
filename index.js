// import .env file
require('dotenv').config()

// server creation
// express

// 1-import express
const express=require('express')

// import router
const router = require('./routes/router')

// import cors
const cors=require('cors')


// 2-create server using express
const server=express()

// integrate front-end
server.use(cors())

// import connection.js
require('./db/connection')

// 3-server run

// port
const port=5000 || process.env.port

// to convert the datas in the request from json to js
server.use(express.json())

// set router
server.use(router)

server.listen(port,()=>{
    console.log(`______________server started at port number ${port}_______________`);
})
