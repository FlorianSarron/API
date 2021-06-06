const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/UserSchema');
const router = express.Router();


const format = require('./joi_request_format');
const { Console } = require('console');

const usersRoutes = require('./routes/usersRoutes');
const ledsRoutes = require('./routes/ledsRoutes');

const app = express();
app.use(express.json());

const dbUri = "mongodb+srv://florian:05022001@backendjs.o2mju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const PORT = process.env.PORT || 3000;

/*
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log("connected to db");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

mongoose.connect(dbUri, {useNewUrlParser : true})
    .then((result) => console.log("connected to DB"))
    .catch((err) => console.log("ERREUR !!!!!!!!" + err));
//register view engine
app.set('view engine', 'ejs');

app.listen(PORT, () => `Listening on http://localhost:${PORT} ...`);

//middleware & static files
app.use(express.static('public'));
app.use('/users',usersRoutes);
app.use('/leds',ledsRoutes);

