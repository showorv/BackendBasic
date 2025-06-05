
const fs = require("fs")
const path = require("path")


const file = __dirname

const filename = "asyncpromises.txt"
const filepath = path.join(filename)

// fs.promises.readdir(file).then((data)=> console.log(data)).catch((err)=> console.error(err))


const ReadFile =async ()=>{
    try {
        const data = await fs.promises.readdir(file)
        console.log(data);
    } catch (error) {
        console.error("data not found",error);
    }
}

ReadFile();

const writeFileExample = async()=>{
    try {
       await fs.promises.writeFile(filepath, "async await file added", "utf-8")
        console.log("fileadded");
    } catch (error) {
        console.error(error.message)
    }
}
writeFileExample()