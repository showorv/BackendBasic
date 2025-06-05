import express from "express";
import { PORT } from "../env.js"
import path from "path"
import { log } from "console";

const app = express()

// using ejs

app.set("view engine", "ejs")
// app.set("views", "./views")

app.get("/report",(req,res)=>{

    const student = [
        {
        name: "Showrov",
        Id: "23-54133"
        },
        {
        name: "Showrov",
        Id: "23-54133"
        },
        {
        name: "Showrov",
        Id: "23-54133"
        }
]
    // res.send("hi")
    res.render("export",{student})
})



// absolute path
const statics = path.join(import.meta.dirname, "public");
//get full html css js folder
app.use(express.static(statics))

// app.get("/", (req,res)=>{
//     // console.log(__dirname);

//     // console.log(import.meta.dirname);
//     // console.log(__filename);
//     //  console.log(import.meta.url);

//     const filename = new URL(import.meta.url).pathname
//     console.log(filename);

//     const htmlfilelink = path.join(import.meta.dirname, "public", "index.html")

//     // res.send("hello")
//     res.sendFile(htmlfilelink)
// })


//route parameter access from url

// app.get("/profile/:username", (req,res)=>{
//     console.log(req.params);
//     res.send( `my username is ${req.params.username}`)
// })


//
app.get("/profile/:username/article/:slug", (req,res)=>{
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send( `article by ${req.params.username} article is ${formatedSlug}`)
})

//query parameter

app.get("/product", (req,res)=>{
    console.log(req.query);

    res.send( `search for ${req.query.search} and page limit from ${req.query.page} to ${req.query.limit}`)

    
})


//form submission handle

// app.use("/contact",(req,res)=>{
//     console.log(req.query);
//     res.redirect("/");
// })


//! middlewear must for post method
app.use(express.urlencoded( {extended:true}))

app.post('/contact', (req, res) => {
    console.log(req.body); // Log the submitted form data
    res.redirect('/');     // Redirect back to the homepage
  });


  //404 error

  app.use((req,res)=>{
   return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"))
  })
app.listen(PORT, ()=>{
    console.log("server starting on port 3000");
})