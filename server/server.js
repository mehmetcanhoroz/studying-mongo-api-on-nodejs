var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    let newtodo = new Todo({
        text: req.body.text
    });

    console.log(req.body);

    newtodo.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

    //res.send({text: "hi client!"});


});

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

//let newTodo = new Todo({ text: "take child from school" });

//newTodo.save().then(() => { console.log("Added todo", newTodo); }, (e) => { console.log("Unable to save: ", e); });
