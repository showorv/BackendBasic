const http = require("http")

const server = http.createServer((req,res)=>{

    if(req.url ==="/"){
        res._write( "hello")
        res.end();
    }
    if(req.url ==="/node"){
        res._write( "hello node")
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log( `server listening on Port ${PORT}`);
});
