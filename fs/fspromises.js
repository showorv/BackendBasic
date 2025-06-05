
const fs = require("fs")
const path = require("path")


const file = __dirname

const filename = "promises.txt"
const filepath = path.join(filename)

fs.promises.readdir(file).then((data)=> console.log(data)).catch((err)=> console.error(err))


fs.promises.writeFile(filepath, "file added", "utf-8").then(console.log("added")).catch((err)=> console.error(err))





fs.promises.appendFile(filepath, "file added again", "utf-8").then(console.log("added")).catch((err)=> console.error(err))

fs.promises.readFile(filepath,  "utf-8").then((data)=>console.log(data)).catch((err)=> console.error(err))

fs.promises.unlink(filepath).then(console.log("deleted")).catch((err)=>console.log(err))