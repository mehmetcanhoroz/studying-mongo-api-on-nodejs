const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect DB Server!");
    }
    const db = client.db("TodoApp");

    console.log("Successfully connected to Db server!");

/*
    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert! ", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/

/*
    db.collection('Users').insertOne({
        name: "Mehmet",
        age: 21,
        location: "Istanbul"
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert! ", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/

    client.close();
});