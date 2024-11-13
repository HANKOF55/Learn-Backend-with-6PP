// importing express module
import express, { application } from "express";
import { homedir } from "os";
import path from "path";

// creating and instance of express application 
const app = express();

app.use(express.static(path.join(path.resolve(), "public"))); 

// setting up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    // Here we are sending "index.ejs" file from views folder and a variable named -> "name"
    // This variable can be accessed in "index.ejs" 
    // res.render("index", { name: "Harish" });    
    res.sendFile("home");


});


// listening server
app.listen(5000, ()=>{
    console.log("Server is working");
});