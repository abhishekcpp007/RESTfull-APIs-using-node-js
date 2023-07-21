const ideas =require("../models/idea.model")

/*
search all idea
*/ 
exports.fetchAllIdeas=(req , res)=>{
res.status(200).send(ideas);
}

let idCount=1;
/*
Create new idea
*/
exports.createIdea =(req,res)=>{
    const idea =req.body;
    idea.id=++idCount;
    ideas[idCount]=idea;
    res.status(201).send(ideas[idCount]);

}



//


/*
Update idea
*/ 
exports.UpdateIdea=(req,res)=>{
    //i need to read the id passd in the path
    //127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId= req.params.id;
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }
    else{
        res.status(400).send({
            message : 'idea Id passed was not correct'
        })
    }
}


// delete part ideas

exports.deleteIdea =(req,res)=>{
    // check if present thean delete else return error message
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message : 'successfully deleted'
        
        })

    }
    else{
        res.status(400).send({
            message : "wrong idea id"


        })
    }

}