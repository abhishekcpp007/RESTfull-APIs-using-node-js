const ideaController = require("../controllers/idea.controller");

/*

Define route for the calls like 


GET 127.0.0.1:8080/ideaApp/v1/ideas
*/ 
module.exports=(app)=>{
    app.get("ideaApp/v1/ideas",ideaController.fetchAllIdeas());

// POST
app.post("/ideaApp/v1/ideas",ideaController.createIdea);


// delete call
app.delete("/ideaApp/v1/ideas/:id" , ideaController.deleteIdea);
}

