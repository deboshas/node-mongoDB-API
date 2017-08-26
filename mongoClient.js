//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //object destructring ES6


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {

    if (error) {
        return console.log("Unable to connect to databaase server");
    } else
        console.log("Connection succedded");

    // db.collection('ToDoApp').insert({ Name: "Debojyoti", Title: "Talukdar" }, (err, result) => {
    //  if (err) {
    //  return console.log("unable to insert", err);
    //}

    //console.log("insert data ", result);


    //});

    db.collection('Users').insert({ _id: new ObjectID(), Name: "RaiLovesRio", Password: "1234" }, (err, response) => {

        if (err) {
            return console.log("unable to insert", err);
        }

        console.log("insert data ", response.ops[0]._id.getTimestamp());
    });
    db.close();

});