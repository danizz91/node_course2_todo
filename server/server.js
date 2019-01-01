var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
const _= require('lodash');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/Users');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=> {
        res.status(400).send(e);
    })
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;

    //Valid id using isValid
        //404 - send back empty send
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
        Todo.findById(id).then((todo)=> {
            if(!todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e)=> res.status(404).send());


    // findById
        //success
        // if todo -send it back
        // if no todo - send back 404 with empty body
        //error
            //400 - and send empty body back
});

app.get('/todos',(req,res)=> {
   Todo.find().then((todos)=> {
       res.send({todos});
   })
},(e)=>{
    res.status(400).send(e);
});

app.delete('/todos/:id', (req,res)=>{
    //get the id
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    //vladiate the id -> not valid? return 404
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        return res.send({todo});
    }).catch((e)=> res.status(404).send());
    //remove todo by id
        //success
        //if no doc, send 404
        // if doc, send doc back with 200
    //error
     // 400 with empty body

});
    app.patch('/todos/:id',(req,res)=>{
       var id = req.params.id;
       var body = _.pick(req.body,['text','completed']);
        if(!ObjectID.isValid(id)){
            return res.status(404).send();
        }
        if (_.isBoolean(body.completed) && body.completed){
            body.completedAt = new Date().getTime();
        } else{
            body.completed = false;
            body.completedAt = null;
        }
        Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
            if(!todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e)=> res.status(400).send());
        });


app.listen(port,()=> {
    console.log(`Started on port ${port}`);
});

module.exports = {app};