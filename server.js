// importing http module in http variable
// old way or importing module
// const http = require("http");

// new way of importing a module
import http from "http";


// creating a server using "createServer()" method 
const server = http.createServer( (req, res)=> {
   
    // checking the request method
    // req.url will give the route of the site
    // console.log(req.url);


    // Now the website will not reload infinitely because I have sent a response.
    // res.end("Noice");

    // creating routes usig req.url method
    if(req.url === "/") {   
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url === "/about"){
        res.end("<h1>About Page</h1>");  
    }
    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>");
    }
    else {
        res.end("<h1> 404 Page Not Found</h1>");
    }
})

// listening server on a port
server.listen(5000, ()=> {
    console.log("server is working on port :5000");
})
