DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price FLOAT(10,2) NOT NULL,
  stock_quantity INT (100) DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Dog Food', 'Pet Food', 12.50, 100);
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Dog Food - Organic', 'Pet Food', 18.50, 50);
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Cat Food', 'Pet Food', 10, 100);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Cat Food - Organic', 'Pet Food', 15, 50);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Dog Bed', 'Accessories', 45, 10);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Cat Bed', 'Accessories', 30, 10);
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Dog Leash', 'Accessories', 13.50, 25);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Scratching Post', 'Accessories', 18.50, 25);

INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Pig Ear', 'Treats', 4, 200);
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity)
        VALUES ('Dried Anchoviesr', 'Treats', 6, 200);
        