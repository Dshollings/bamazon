// require node packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  // check for connection error
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  openOffice();
});

function openOffice() {
  console.log("Welcome to your office!");
    taskChooser();
  }
};

function taskChooser() {
  // read id, product and price for all items in "products" table and pass them to selection process
  connection.query("SELECT id, product_name, price, stock_quantity, unit, units, sales FROM products", function(err, res) {
    // check for query error
    if (err) throw err;
    // prompt for item selection
    inquirer.prompt({
      name: "chosenTask",
      type: "list",
      message: "What would you like to do?",
      choices: [ "View Product List", "Add new Product", "Check Low Inventory", "Add inventory", "Overview" ]
    })
    .then(function(answer, res) {
      switch(answer){
        case: "Overview"
          overview(res)
          break;
        case: "Add new Product"
          addNewProduct(res)
          break;
        case: "Check Low Inventory"
          checkLowInventory(res)
          break;
        case: "Add inventory"
          addInventory(res)
          break;
        default:
          taskChooser()
          break;
      }
    }
  });
}

function overview(res){
  console.log("-----------------------------------------------");
  // loop through all items
  for(var i = 0; i < res.length; i++){
    console.log("Item #: " + res[i].id + " Product: " + res[i].product_name + " Price: $" + res[i].price);
    console.log("-----------------------------------------------");
  };
  taskChooser();
}

function addNewProduct(res){
  taskChooser();
}

function checkLowInventory(res){
  taskChooser();
}

function addInventory(res){
  taskChooser();
}


