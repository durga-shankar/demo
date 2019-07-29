const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require('path');
const db = require("./db");
const collection = "imdb";

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'index.html'));
})

app.get('/getTodos',(req,res)=>{
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
    if(err)
    console.log(err);
    else{
        console.log(documents);
        res,json(documents);
    }
    });
});

app.put('/:id',(req,res)=>{
    const idmbId = req.params.id;
    const userInput = req.body;

    db.detDB(),collection(collection).findOneAndUpdate({_id : idmbId},{$set : {todo : userInput,todo},{returnOriginal :false},(err,result)=>{
                if(err)
                    console.lof(err);
                else{
                    res.json(results);
                }
    });
});

db.connect((err)=>{
    if(err){
        console.log('unable to coneect to databse');
        process.exit(1);
}
    else{
        app.listen(3000,()=>{
            console.log('connected to databses, app listening on port 3000');
        });
    }
})