
-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;

-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the table "products" within bamazonDB --
CREATE TABLE products (
    -- Create a numeric column called "item_id" which will automatically increment its default value as we create new rows. --
    item_id INT NOT NULL AUTO_INCREMENT,
    -- Makes a string column called "product_name" which cannot contain null --
    product_name VARCHAR(256) NOT NULL,
    -- Makes a sting column called "department_name" which cannot contain null --
    department_name VARCHAR(256) NOT NULL,
    -- Makes an numeric column called "price" that allows for up to 2 decimals --
    price DECIMAL(10,2) NOT NULL,
    -- Makes an numeric column called "stock_quantity" --
    stock_quantity INT NOT NULL,
    -- Set the item_id as this table's primary key --
    PRIMARY KEY (item_id)
);


-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo","Electronics", 79.99, 107);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crock Pot","Home and Kitchen", 99.95, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Patio Heater","Lawn and Garden", 69.99, 58);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Stick","Electronics", 29.99, 166);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camping Lantern","Lawn and Garden", 19.95, 141);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fit Bit","Electronics", 99.95, 82);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth Headphones","Sports and Outdoors", 23.99, 115);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coconut Oil","Beauty and Personal Care", 12.95, 189);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Massage Oil","Beauty and Personal Care", 13.95, 77);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GPS","Electronics", 179.99, 30);

-- Shows the created products table
SELECT * FROM products;