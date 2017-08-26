//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //object destructring ES6


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {

    if (error) {
        return console.log("Unable to connect to databaase server");
    } else
        console.log("Connection succedded");

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59a14f2fd4d34d10f018c070')

    }, {

        $set: {

            Password: "4568"
        }
    }, true).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));

    }, (result) => {

        console.log(JSON.stringify(result, undefined, 2));


    });

    db.close();


});