
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
