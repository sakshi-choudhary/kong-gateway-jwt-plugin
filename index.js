const express=require('express')
const server=express()
const port=3000

server.get('/',(req,res)=>{
    console.log(req.headers)
    res.status(200).send('Love Kong!')
})

server.listen(port,()=>{
    console.log('server is listening on port :'+port)
})