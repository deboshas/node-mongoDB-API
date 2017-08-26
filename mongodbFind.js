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

    // var result = db.collection('Users').find({ _id: new ObjectID("59a1500210c04815f0dd473a") }).toArray().then((docs) => {

    // console.log(JSON.stringify(docs, undefined, 2));
    //console.log("Number of documents returned", docs.length);
    // }, (error) => {
    //console.log("unable to fetch from mongo db");
    // })

    db.collection('Users').find({ Name: "Rituparna" }).toArray().then((docs) => {

            console.log(JSON.stringify(docs, undefined, 2));
            console.log("Number of documents returned", docs.length);
        },
        (error) => {

            console.log("Error occoured", error);
        })
    db.close();

});