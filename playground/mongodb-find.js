//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect DB Server!");
    }
    const db = client.db("TodoApp");
    console.log("Successfully connected to Db server!");




    client.close((err) => {
        if(err)
        {
            return console.log("Error has occurred while closing conneciton!");
        }
        console.log("Connection closed!");
    });
});