
const express = require("./node_modules/express");

const app=express();
app.use(express.json());
 

//function newFunction() {
  //  return "./node_modules/express";
//}
app.use(myMiddleWare);

function myMiddleWare(req,res,next){
    console.log("Inside the middle ware I created");
    next(); // It will pass on the control to the next step
}


//stich the route the server
require("./routes/idea.routes")(app);


/*** switch the routes to the sever*/
//require("./routes/idea.routes")(app);

/*


*starting server
*/
app.listen(8080, ()=>{
    console.log("Server started");
})