const express = require('express');

const app = express();

const port = 3000;

let users = require('./users');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Page!')
});


// GET
app.get('/api/users', (req, res) => {
  console.log("Sending Users");
  res.send(users);
});

// GET/:id
app.get('/api/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('The user with the given ID does not exist.');
        return;
    }
    console.log("Sending User");
    res.send(user);
});

// POST
app.post('api/users', (req, res) => {
    const user = {
        id: users.length,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        phone: req.body.phone,
        website: req.body.website,
        address: {
            suite: req.body.address.suite,
            street: req.body.address.street,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode
        },
        company: {
            name: req.body.company.name,
            catchPhrase: req.body.company.catchPhrase,
            bs: req.body.company.bs
        }
    };

    console.log("Adding User");
    users.push(user);
    res.send(user);
});

// PUT/:id
app.put('api/users/:id', (req, res) => {

    if (!req.body.name 
        || !req.body.email 
        || !req.body.username 
        || !req.body.phone 
        || !req.body.website 
        || !req.body.address.suite 
        || !req.body.address.street 
        || !req.body.address.city 
        || !req.body.address.zipcode
        || !req.body.company.name 
        || !req.body.company.catchPhrase 
        || !req.body.company.bs) {

          res.status(400).send("Bad Request");
          return;
        }
    
    const id = users.map((user) => {
      return user.id;
    }).indexOf(parseInt(req.params.id));

    if (id == -1) {
      res.status(404).send('The user with the given ID does not exist.');
      return;
    }
    
    console.log("Updating User");

    users[id] = {
      id: id,
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      phone: req.body.phone,
      website: req.body.website,
      address: {
          suite: req.body.address.suite,
          street: req.body.address.street,
          city: req.body.address.city,
          zipcode: req.body.address.zipcode
      },
      company: {
          name: req.body.company.name,
          catchPhrase: req.body.company.catchPhrase,
          bs: req.body.company.bs
      }
    }

    res.send(users[id]);
});


app.listen(3000, () => {
  console.log(`Listening at http://localhost:${port}`)
});