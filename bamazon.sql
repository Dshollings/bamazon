DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price FLOAT(10,2) NOT NULL,
  stock_quantity INT (100) DEFAULT 0,
  unit VARCHAR(100) DEFAULT item,
  units VARCHAR(100) DEFAULT items,
  PRIMARY KEY (id)
);

INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Dog Food', 'Pet Food', 12.50, 100, 'kilo', 'kilos');
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Dog Food - Organic', 'Pet Food', 18.50, 50, 'kilo', 'kilos');
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Cat Food', 'Pet Food', 10, 100, 'kilo', 'kilos');

INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Cat Food - Organic', 'Pet Food', 15, 50, 'kilo', 'kilos');

INSERT INTO products
       (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Dog Bed', 'Accessories', 45, 10, 'bed', 'beds');

INSERT INTO products
       (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Cat Bed', 'Accessories', 30, 10,  'bed', 'beds');
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Dog Leash', 'Accessories', 13.50, 25, 'leash', 'leashes');

INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Scratching Post', 'Accessories', 18.50, 25, 'post', 'posts');

INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Pig Ear', 'Treats', 4, 200, 'ear', 'ears');
        
INSERT INTO products
        (product_name, department_name, price, stock_quantity, unit, units)
        VALUES ('Dried Anchovies', 'Treats', 6, 200, 'package', 'packages');
        