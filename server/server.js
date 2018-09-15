var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

/*app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    });*/

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (err) => {
        res.status(404).send(e);
    });
});


console.log(app.settings.env);

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

//let newTodo = new Todo({ text: "take child from school" });

//newTodo.save().then(() => { console.log("Added todo", newTodo); }, (e) => { console.log("Unable to save: ", e); });

module.exports = {
    app
};




/**"start": "NODE_ENV=production node server/server.js"**/