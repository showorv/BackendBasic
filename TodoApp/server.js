
const fs = require("fs")
const http = require ("http")

const data = [
    {
        title: "hell0",
        name:"hello"
    }
]
const server = http.createServer((req,res)=>{

    if(req.url === "/todo" && req.method === "GET"){

        res.writeHead(201,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify(data)) 
    }else{
        res.end("not found")
    }
    res.end("todo app")
})

server.listen(5000,()=>{
    console.log("server listenting at 5000");
})