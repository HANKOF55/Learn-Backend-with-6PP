// importing express module
import express, { application } from "express";
import { homedir } from "os";
import path, { format } from "path";

// creating and instance of express application 
const app = express();

// using middlewares
// This line here to tell the default path for static files
app.use(express.static(path.join(path.resolve(), "public"))); 
app.use(express.urlencoded({extended: true }));


// array for storing user data recieved from the form
const users = [];

// setting up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    // Here we are sending "index.ejs" file from views folder and a variable named -> "name"
    // This variable can be accessed in "index.ejs" 
    res.render("index", { name: "Harish" });    

});

app.get("/success" ,(req, res) => {
    res.render("success");  
});

app.post("/", (req, res)=>{

    // pushing user data in the users array
    users.push({Name: req.body.name, 
                email: req.body.email});

    res.redirect("/success");
});

app.get("/users", (req, res) => {
    res.json({
        users,
    })
})


// listening server
app.listen(5000, ()=>{
    console.log("Server is working");
});