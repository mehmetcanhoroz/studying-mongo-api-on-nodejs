let mongoose = require("mongoose");

let User = mongoose.model("User", {
    name: { type: String, require: true, minlength: 3, trim: true },
    email: { type: String, require: true, minlength: 5, trim: true }
});

module.exports = {
    User
};