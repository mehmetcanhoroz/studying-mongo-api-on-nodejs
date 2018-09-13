//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect DB Server!");
    }
    const db = client.db("TodoApp");
    console.log("Successfully connected to Db server!");


    /*db.collection("Todos").find({
        _id: new ObjectID("5b967ab5f3fb380e8db55b2e")
    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Error occurred fetching todos ", err);
    });*/

    db.collection("Todos").find().count().then((count) => {
        console.log("Todos count:",count);
    }, (err) => {
        console.log("Error occurred fetching todos ", err);
    });


    client.close((err) => {
        if (err) {
            return console.log("Error has occurred while closing conneciton!");
        }
        console.log("Connection closed!");
    });
});