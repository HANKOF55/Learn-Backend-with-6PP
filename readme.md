server.js -> How to create a server and how to do routing.

# modules

- A module in Node.js is a reusable piece of code (file) that can be imported into other files to organize and structure an application.

## How to create a module 

- create a file such as "feature.js"; 
- In feature.js
    - const value = 3.14; 
    - export default value;

- now i can use "value" variable in any file by importing "feature.js" module 

## How to import and use a module

- suppose there i am importing the above created module in "server.js"
    - In server.js

        - import value from "./features.js"
        - console.log(value);

- so this is how we're gona use a module 