# bamazon
An amazon-like store front using Node.js and MySQL.

bamazon is operated through the command line. The app allows a user to see everything currently in stock in a virtual store. Then allows user through a series of questions to 'purchase' items and update the quantities left. 

Dependencies to install with NPM:
- inquirer
- mysql
- console.table

## How it Works:

Customers are first shown a table of the total quantities of every item in stock. Through a series of questions, user can purchase a specific item, and choose how much of the item to purchase. 
- If a valid quantity is selected, the app calculates the customer's total spent, as well as updates the quantity of the remaining inventory.
- If an invalid quantity is selected, the app responds with a message letting the user know that the items aren't availble. 

## Running the app:

In order to run the CLI accurately, you will have to first install all of the dependencies, as well as set up the MySQL database. 
```
1. Start by creating your connection with MySQL, and run the schema.sql, and seeds.sql files in MySQL Workbench to set up your database. 
2. Install all of the dependencies associated with the app. 
3. Using Node, run the bamazonCustomer.js file using the command line. 
4. User is then showed the available list of inventory in the store, and asked a few questions.
5. User can then purchase items, and automatically update the quantity remaining in stock. 
```

## Break down:

The app requires a sequential order. 
```
- Once User 1 exists, the  option to create User 2 is available. 
- Once User 2 exists, User 1 is given the option to click the 'ihaveArrived' button.
- Once User 1 has clicked the 'ihaveArrived' button, User 2 is given the option to click the 'onTheWay' button. 
- Once User 2 has clicked the 'onTheWay' button, all parties are notified of their current status. 
```

## Deployment:

https://nakrap.github.io/ihaveArrived/

## Built With:
```
Node.js,
MySQL,
NPM,

Javascript,
JQuery,
AJAX,
APIs
```
