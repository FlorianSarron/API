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

const dbUri = "mongodb+srv://Charly:charlyOK@iotcluster.w25si.mongodb.net/iotdb?retryWrites=true&w=majority";


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

/*
app.get('/users', (req, res) => {
    try{
        const users = UserObject.find(); 
      	//FindById, FindOne(x => x.name == 'name'), ...
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({message:error})
    }
})

app.get('/add-user', (req,res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    });

    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

*/
/*

app.post('/api/users', (req,res) => {
    var idUser = 0;
    fs.readFile(DB_USERS, (err, data) => {
        let users = JSON.parse(data);
        users.forEach(user => {
            if(user.id > idUser) {
                idUser = user.id;
            }
        });
        let user = { id: idUser + 1, name: req.body.name, password: req.body.password};
        users.push(user);
        fs.writeFile(DB_USERS, JSON.stringify(users), (err) => {
            if(err) return  res.status(500).send(err.message);
            res.status(200).send(users);
        });
    });
})

app.get('/api/users', (req,res) => {
    fs.readFile(DB_USERS, (err, data) => {
        if(err) return res.status(500).send(err.message);
        res.status(200).send(JSON.parse(data));
    })
})
*/

/*
app.get('/api/products', (req, res) => {
    fs.readFile(DB_PRODUCTS, (err, data) => {
        if(err){
            return  res.status(500).send(err.message);
        }
        res.status(200).send(JSON.parse(data));
    })
});

app.post('/api/products', (req,res) => {
    var idProduct = 0;
    fs.readFile(DB_PRODUCTS, (err, data) => {
        let products = JSON.parse(data);
        products.forEach(product => {
            if(product.id > idProduct) {
                idProduct = product.id;
            }
        });
        let produit = { id: idProduct + 1, name: req.body.name, price: req.body.price};
        products.push(produit);
        fs.writeFile(DB_PRODUCTS, JSON.stringify(products), (err) => {
            if(err) return  res.status(500).send(err.message);
            res.status(200).send(products);
        });
    });
});

app.get('/api/products/:id', (req, res) => {
    let id = req.params.id;
    let product;
    fs.readFile(DB_PRODUCTS, (err, data) => {
        let products = JSON.parse(data);
        products.forEach(prod => {
            if(prod.id == id) {
                product = prod;
            }
        })
        if(err){
            return  res.status(500).send(err.message);
        }
        res.status(200).send(product);
    })
});
*/
//faire GET avec un id
    //req.params.id pour recup les id

//faire PUT api/product/id

//faire DELETE api/product/id

