let app = require('../index');
let db = require('../database');


app.get('/users', (req, res) => {
  res.send(db.getAll('users'));
})

app.post('/login', (req, res) => {
    console.log("LOGIN IS HERE!");
    console.log(res);
    console.log(req);

  });
