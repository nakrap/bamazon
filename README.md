# bamazon
An amazon-like store front using Node.js and MySQL.

bamazon is operated through the command line. The app allows a user to see everything currently in stock in a virtual store. Then allows user through a series of questions to 'purchase' items and automatically update the quantities remaining in stock. 

Dependencies to install with NPM:
- inquirer
- mysql
- console.table

## How it Works:

Customers are first shown a table of the total quantities of every item in stock. Then customer is asked a series of questions allowing user to purchase a specific item, and choose how much of the item to purchase. 
- If a valid quantity is selected, the app calculates the customer's total dollars spent, as well as updates the quantity of the remaining inventory.
- If an invalid quantity is selected, the app responds with a message letting the user know that the items aren't availble. 

## Running the app:

In order to run the CLI accurately, you will have to first install all of the dependencies, as well as set up the MySQL database. 
```
1. Start by creating your connection with MySQL, and run the schema.sql, and seeds.sql files in MySQL Workbench to set up your database. 
```
![Database Setup](/images/database.png | width=300)

```
2. Install all of the dependencies associated with the app. 
```
![Dependencies Installed](/images/dependencies.png | width=300)

```
3. Using Node, run the bamazonCustomer.js file using the command line.
```
![Run the App](/images/run.png | width=300)

```
4. User is then showed the available list of inventory in the store.
```
![Inventory Available Table](/images/inventory.png | width=300)

```
5. User is then asked what item to purchase, as well as how much of it.
```
![Inquirer](/images/questions.png | width=300)

```
6. User can then complete purchase of the items, and automatically update the quantity remaining in stock. 
```
![Completed Purchase](/images/complete.png | width=300)

```
7. If user enters invalid input, user is shown a message indicated not enough is available. 
```
![Incompleted Purchase](/images/incomplete.png | width=300)



## Break down:

Once a purchase is made, the app automatically calculates the total amount spent, and is also able to update the quantity remaining in the database. 
```
- Once a user inputs the id number of the item desired, the user is also asked to input a desired quantity.
- Once these 2 user inputs are captured, the app decides if the purchase is valid or not based on the quantity in our database.
- If the quantity is available, the app runs the function to take the price of the item, and multiply it by the desired quantity to give the user a total amount spent in dollars. 
- Simultaneously, the app updates the database by taking the total available quantity and subtracting the amount purchased from it.
- If the desired quantity is greater than the total available quantity in our database, the user is told that there is not enough available inventory to satisfy the purchase. 
```


## Built With:
```
Node.js,
MySQL,
NPM,
Workbench,
Command Line,
Terminal,
Javascript,
JQuery
```
