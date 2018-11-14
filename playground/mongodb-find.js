// const mongoClient =  require('mongodb').MongoClient;
// BOTH THE LINES WORK  IN THE SAME WAYS
const {MongoClient, ObjectID} = require('mongodb');

// var name = {name:'praveen', age: 25, address:'Delhi'};
// var {name} =name;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/todoApp', (error, db) => {
    if(error){
        return console.log('unable to connect mongo Server');
    }
     console.log('connected to mongodb Server');

    db.collection('Todos').find({text:'Hello, Praveen'}).toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch data from', error);
    }); 
});