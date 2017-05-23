// const MongoClient = require('mongodb').MongoClient;
   const { MongoClient, ObjectID } = require('mongodb'); // Destructure Object in ES6

   var obj = new ObjectID();
   console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Db Connection Error');
    }
    console.log('Connected To DB Server...');

//     db.collection('User').insertOne({
//         name: 'Raju',
//         age: 37,
//         location: 'Bangalore'
//     },(err, result)=>{
//         if(err){
//             console.log('Erro insert '+ err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });


    db.collection('User').find({location: 'Chennai'}).toArray().then((docs)=>{
        console.log('User');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log(err);
    });
   //db.close();
});