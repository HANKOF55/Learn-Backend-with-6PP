// importing express module
import express, { application } from "express";
import path from "path";


// creating and instance of express application 
const app = express();

app.get("/", (req, res) => {
    
    // send text into the body 
    // res.send("Hi Hello")

    // send status code
    // res.sendStatus(404);

    // send json data
    // res.json({
    //         success: true,
    //         product: [],
    // });

    // send html File

    // "path.resolve()" method will give you absolute path of your current working folder 
    const fileLocation = path.resolve();

    // sending the "index.html" file by prepending the absolute path with html file
    // res.sendFile(fileLocation + "/index.html");

    // Or we can also use "path.join()" method
    res.sendFile(path.join(fileLocation , "./index.html"));


});


// listening server
app.listen(5000, ()=>{
    console.log("Server is working");
});