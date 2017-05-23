// const MongoClient = require('mongodb').MongoClient;
   const { MongoClient, ObjectID } = require('mongodb'); // Destructure Object in ES6

   var obj = new ObjectID();
   console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Db Connection Error');
    }
    console.log('Connected To DB Server...');

    // //Insert Data
    // db.collection('User').insertOne({
    //     name: 'Raju',
    //     age: 37,
    //     location: 'Bangalore'
    // },(err, result)=>{
    //     if(err){
    //         console.log('Erro insert '+ err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // //View Data
    // db.collection('User').find({location: 'Chennai'}).toArray().then((docs)=>{
    //     console.log('User');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log(err);
    // });

    //Delete Many Data
    // db.collection('User').deleteMany({name: 'Test'}).then((result)=>{
    //     console.log(result);
    // });

    //Delete One
    // db.collection('User').deleteOne({name:'Muthukumar'}).then((result)=>{
    //     console.log(result);
    // });

    //Delete FindOneandDelete
    db.collection('User').findOneAndDelete({_id: new ObjectID("5923c3bdb2b73b7d9833d0e2")}).then((result)=>{
        console.log(result);
    });

   db.close();
});