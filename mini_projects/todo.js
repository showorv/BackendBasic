import { log } from "console";
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];

const showMenu = ()=>{

    console.log("\n1: Add a task");
    console.log("2: View task");
    console.log("3: Exit");

    rl.question("Choose an option: ", handleInput)
   
}

const handleInput = (options)=>{

    if( options ==="1"){
        rl.question("Enter the task: ", (task)=>{
            todos.push(task);
            console.log("Task added: ",task);
            showMenu()
        })
    }else if( options ==="2"){
            console.log( "\nYour tasks are:");
            todos.forEach( (task, index)=>{
                console.log(`${index+1}. ${task}`)
            })
            showMenu()
    }else if(options ==="3"){
        console.log("End");
        rl.close()
    }

}

showMenu()