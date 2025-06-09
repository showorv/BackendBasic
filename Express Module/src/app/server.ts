import app from "./app";
import 'dotenv/config'
import connectDB from "./db/db";
let server;
const port = 3000


// const bootstrap = async()=>{
//    connectDB().then(()=>{
//     server = app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`)
//     })
//    }) 
// }

const bootstrap = async()=>{
  
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  
}

bootstrap();