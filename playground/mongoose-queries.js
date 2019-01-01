const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/Users');

const {ObjectID} = require('mongodb');
var id= '5c2b4170ae0c9a1c32860f22';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Id not found');
    }
    console.log('User By Id',user);
}).catch((e)=> console.log(e));

// var id = '5c2b6dd69401bc8816bba09a11';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//    _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });
//
// Todo.findOne({
//     _id:id
// }).then((todo)=> {
//     console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=> {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID',todo);
// }).catch((e)=> {
//     console.log(e);
// });

// User.findById