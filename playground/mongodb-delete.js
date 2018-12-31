const MongoClinect = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClinect.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // client.collection('Users').deleteMany({text:'Eat lunch'}).then((result)=> {
    //     console.log(result);
    // });
    //deleteOne

    //findOneAndDelete
    client.collection('Users').findOneAndDelete({_id:new ObjectID('5c29245f30d2230eacc347d8')}).then((result)=> {
        console.log(JSON.stringify(result,undefined,2));
    });

   // client.close();
} );