var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'qweasdzxc',
  database: 'bamazonDB'
});


var sqlCommand = 'SELECT * FROM products';

connection.connect(function(err) {
  if (err) { console.error('bamazonCustomer.js: ', err); }
  console.log('connected! ', connection.threadId);

  connection.query(sqlCommand, function(err, response) {
    if (err) { console.error('bamazonCustomer.js: ', err); }

    console.log('response: ', response);
  });
})