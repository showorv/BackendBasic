import readline from "readline"
import fs from "fs"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const filecreate = ()=>{
    rl.question("Enter file name: ",(filename)=>{
        rl.question("Enter content in the file: ",(content)=>{
            fs.writeFile( `${filename}.txt`, content, (err)=>{
                if(err){

                    console.log(`error found ${err}`);
                }else{
                    console.log(`File "${filename}.txt" created successfully`);
                }
            })
        })
    })
}

filecreate()