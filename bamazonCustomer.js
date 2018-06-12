var mysql = require('mysql');
var inquirer = require('inquirer');
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'qweasdzxc',
  database: 'bamazonDB'
});

connection.connect(function(err) {
    if (err) { console.error('bamazonCustomer.js: ', err); }});

function displayInventory() {

var sqlCommand = 'SELECT * FROM products';

// connection.connect(function(err) {
//   if (err) { console.error('bamazonCustomer.js: ', err); }
//   console.log('connected! ', connection.threadId);

  connection.query(sqlCommand, function(err, response) {
    if (err) { console.error('bamazonCustomer.js: ', err); }

    // console.log('response: ', response);
    console.log('');
    console.log('============================================================================');
    console.log('');
    console.table(response);
    console.log('============================================================================');
    productSearch();
  });
// });
};

// validateInput makes sure that the user is supplying only positive integers for their inputs
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// function multiSearch() {
//     var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//     connection.query(query, function(err, res) {
//       for (var i = 0; i < res.length; i++) {
//         console.log(res[i].artist);
//       }
//       runSearch();
//     });
  
function productSearch() {
    inquirer.prompt([
        {
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you'd like to buy?",
        validate: validateInput,
        filter: Number
        },
        {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?",
        validate: validateInput,
        filter: Number
        }
    ])  
    .then(function(answer) {

        var item = answer.item_id;
		var quantity = answer.quantity;
        
        // Query db to confirm that the given item ID exists in the desired quantity
        var query = 'SELECT * FROM products WHERE ?';

        connection.query(query, {item_id: item}, function(err, res) {
            
            if (err) throw err;
            // console.log(res);
            
            if (res.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                displayInventory();
                
            } else {
                var productData = res[0];
                
            // If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!');

					// Construct the updating query string
					var updateQuery = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQuery, function(err, res) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

                    // End the database connection
                    // connection.end();
                    displayInventory();
					
				}
            };
        });
    });
};

function runBamazon() {
	// console.log('___ENTER runBamazon___');

	// Display the available inventory
	displayInventory();
}

// Run the application logic
runBamazon();
// displayInventory();
