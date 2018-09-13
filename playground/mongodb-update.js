//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect DB Server!");
    }
    const db = client.db("TodoApp");
    console.log("Successfully connected to Db server!");


    db.collection("Todos").findOneAndUpdate(
        {_id: new ObjectID("5b967a7a1592650e853fb2e4")},
        { $set: {completed: true} },
        { returnOriginal: false }        
    ).then((result) => {
        console.log(result);
    });

    db.collection("Users").findOneAndUpdate(
        {_id: new ObjectID("5b967d40e048770eb709c61d")},
        {
            $set: {name: "Mimırt"},
            $inc: {age: -1}
        },
        {returnOriginal:false}
    );













  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

 // db.collection('Users').findOneAndDelete({
 //   _id: new ObjectID("57ac8d47878a299e5dc21bc8")
 // }).then((results) => {
 //   console.log(JSON.stringify(results, undefined, 2));
 // });

    client.close((err) => {
        if (err) {
            return console.log("Error has occurred while closing conneciton!");
        }
        console.log("Connection closed!");
    });
});