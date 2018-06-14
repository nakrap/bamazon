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


// This function makes sure that the user is only inputting positive and non-decimal numbers.
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// Starts the inquirer process for the customer.
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

        // Creating the variables needed.
        var item = answer.item_id;
		var quantity = answer.quantity;
        
        // Query the database to make sure the ID exists and the quantity can be fulfilled.
        var query = 'SELECT * FROM products WHERE ?';

        connection.query(query, {item_id: item}, function(err, res) {
            
            if (err) throw err;
            // console.log(res);
            
            if (res.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                displayInventory();
                
            } else {
                var productData = res[0];
                
                // If the quantity being asked for is available:
				if (quantity <= productData.stock_quantity) {
					console.log('Thank you for your order!');

					// Update the products table.
					var updateQuery = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					

					// Run the math to give a final price.
					connection.query(updateQuery, function(err, res) {
						if (err) throw err;

                        console.log('');
                        console.log('============================================================================');
						console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log('============================================================================');

						// End the database connection
						connection.end();
                    })
                    
                // If there isn't enough quantity to fulfill customer's order, the return an error message.    
				} else {
                    console.log('');
                    console.log('============================================================================');
					console.log('Sorry, the quantity you selected is unavailable.');
					console.log('Please adjust your quantity.');
					console.log('============================================================================');

                    // Displays the inventory again.
                    displayInventory();
					
				}
            };
        });
    });
};

//Needed a way to start the app, but end it and show the inventory if something was done wrong. 
function runBamazon() {

	// Display the available inventory
	displayInventory();
}

// Run the app.
runBamazon();

