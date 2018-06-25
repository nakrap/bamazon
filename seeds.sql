
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