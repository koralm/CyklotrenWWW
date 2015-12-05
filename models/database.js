var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

//Error to db connect
db.on('error', console.error.bind(console, 'connection error:'));

//IF connected
db.once('open', function() {
        console.log("DB OK - connected")
});

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    age: { type: Number, min: 10, max: 99 },
});

var User = mongoose.model('User', UserSchema);

var User1 = new User({ username: 'User1', password: "pasword1", age: 12 });

User1.save(function(err, User1) {
    if (err) return console.error(err);
    //console.dir(User1);
});

var User2 = new User({ username: 'User2', password: "pasword2", age: 12 });
User2.save(function(err, User2) {
    //if (err) return console.error(err);
    //console.log(User2);
});

User.find(function(err, User) {
    //if (err) return console.error(err);
    console.log(User);
});

//mongoose.connection.close()