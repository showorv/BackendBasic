const { log } = require("console")
const fs = require("fs")
const path = require("path")

const filename = "test.txt"
const filepath = path.join(filename)


//writefilesync

const writefile = fs.writeFileSync( filepath, "This is fs file", "utf-8")
console.log(writefile);

//readilesync

const readfile = fs.readFileSync( filepath, "utf-8")
console.log(readfile); // readfile.toString()


//appendfile

const appendfile = fs.appendFileSync( filepath, "\n hello append")
console.log(appendfile);