let app = require('../index');
let db = require('../database');

app.get('/users', (req, res) => {
  res.send(db.getAll('users'));
})

app.post('/login', (req, res) => {
  if(req.body !== ''){
    var email = req.body.email;
    var password = req.body.password;

    var myMan = db.getOne('users','email',email);
    if(myMan.password == password){
      console.log('user name password exists, loading profile');
				   res.send({
					   'redirect':'home',
					   'status':'success'});
    }
  }
  else{
    res.send({
        'error':'Incorrect username, password',
        'status':'fail'});
  }
});
