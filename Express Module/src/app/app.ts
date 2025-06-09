
import express, { Application, Request, Response } from "express"
const app:Application = express()



app.get('/', (req:Request, res: Response) => {
  res.send('I am learning again')
})

// params 
app.get('/todo/:id', (req:Request, res: Response) => {
  res.send('I am learning again')
})

//query =??/ https://api/todo?title=prisma&body=hello
app.get('/todo', (req:Request, res: Response) => {
  res.send('I am learning again')
})



export default app;

// handle routing, middleware, error handling of route 