var mongoose = require('mongoose');



// User
var User = mongoose.model('Users',{
    name: {type:String},
    email: {type:String,trim:true,minlength:1,required:true},
    age: {type:Number},
    password:{type:String}
});

// var oneUser = new User({
//     name:"daniel",
//     email:'danielabrgel91@gmail.com',
//     age:27,
//     password:123123
// });
// oneUser.save().then((doc)=> {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=> {
//     console.log('Unable to create User',e);
// });

module.exports = User;