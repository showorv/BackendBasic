const EventEmitter = require("events")

//instance
const emitter = new EventEmitter()

//listener
emitter.on("greet", (arg)=>{
    console.log(`hello ${arg.username} may be love you ${arg.name}`);
})

//emitter
emitter.emit( "greet", 
 
    {
        username: "Showrov",
        name: "Owara"
    }
)


// real world use ->> 	Emits events like 'request', 'response', 'error'	Emits 'open', 'close', 'error' in streams