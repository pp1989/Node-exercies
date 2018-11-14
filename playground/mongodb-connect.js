const mongoClient =  require('mongodb').MongoClient;

// var name = {name:'praveen', age: 25, address:'Delhi'};
// var {name} =name;
// console.log(name);

mongoClient.connect('mongodb://localhost:27017/todoApp', (error, db) => {
    if(error){
        return console.log('unable to connect mongo Server');
    }
     console.log('connected to mongodb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to Do', 
    //     completed: false
    // }, (error,result) => {

    //     if(error){
    //         console.log('unable to Insert Todos', error);
    //     } 
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

        //  db.collection('User').insertOne({
        //     //  _id : 123,
        //      name: 'Praveen',
        //      age: 23,
        //      address: 'Delhi'
        //  }, (error, result) => {
        //      if(error){
        //          console.log('unable to insert Users', error);
        //      } 
        //      console.log(JSON.stringify(result.ops, undefined, 2));
        //      console.log('Id Creation time:-',result.ops[0]._id.getTimestamp() );
        //  });

    db.close();
});