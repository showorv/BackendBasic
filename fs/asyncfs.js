

const fs = require("fs")
const path = require("path")


const filename = "tesasync.txt"
const filepath = path.join(filename)

//writeFile

const writeFile = fs.writeFile( filepath, "this is file data", "utf-8", (err)=>{
    if(err) console.error(err)
    else console.log("has been added")
})
console.log(writeFile);

//readfile

const readfile = fs.readFile( filepath,"utf-8", (err,data)=>{
    if(err) console.error(err)
    else console.log(data)
})
console.log(readfile);

//appendfile



//deletefile

fs.unlink(filepath, (err)=>{
    if(err) console.error(err)
    else console.log("has been deleted")
})