const MongoClinect = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClinect.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //
    // client.collection('Todos').findOneAndUpdate({_id:new ObjectID('5c292375e13b832e24dc1a30')},{$set:{completed:true}},{returnOriginal:false}).then((result)=> {
    //     console.log(result);
    // });
    client.collection('Users').findOneAndUpdate({name:'Daniel'},{$set:{name:'meni'},$inc:{age:1}},{returnOriginal:false}).then((result)=> {
        console.log(result);
    })
        // client.close();
} );