const express = require('express')
const app = express()
const fetch = require('node-fetch');

// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: '172.17.0.2',//ip de 'db'
  user: 'root',
  password: 'rtlry',
  database: 'ProgWeb'
});

app.get('/users', function (req, res) {
  connection.query('SELECT * from user;', function (error, results) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/users/:id', function (req, res) {
  let id = req.params.id;
  connection.query('SELECT count(*) as"total" from user where id = "'+ id +'";', function (error, results) {
    if (results[0].total == 0) {
      res.send("Utilisateur inconnu. Veuillez tester un autre id S.V.P...");
    } else {                                                                                                                     
      connection.query('SELECT * from user where id = "'+ id +'";', function (error, result) {
        res.json(result);
      })
    }
  });
});

app.get('/', function (req, res) {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => res.send(json))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
