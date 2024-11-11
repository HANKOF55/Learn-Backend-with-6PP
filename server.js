// importing http module in http variable
const http = require("http");

// creating a server using "createServer()" method 
const server = http.createServer( (req, res)=> {
    // checking the request method
    // req.url will give the route of the site
    console.log(req.url);


    // Now the website will not reload infinitely because I have sent a response.
    res.end("Noice");
})

// listening server on a port
server.listen(5000, ()=> {
    console.log("server is working on port :5000");
})
