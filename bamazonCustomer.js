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
  openStore();
});

function openStore() {
  console.log("Welcome to the Pet Store!");
  populateStore();
};

function populateStore(){
  // read id, product and price for all items in "products" table and pass them to selection process
  connection.query("SELECT id, product_name, price, stock_quantity, unit, units FROM products", function(err, res) {
    // check for query error
    if (err) throw err;
  console.log("Make a selection below");
    console.log("-----------------------------------------------");
    // array to hold IDs of available selections
    var idArray = [];
    // loop through all items
    for(var i = 0; i < res.length; i++){
      // display item information if in stock
      if(res[i].stock_quantity > 0){
        console.log("Item #: " + res[i].id + " Product: " + res[i].product_name + " Price: $" + res[i].price);
      }
      else(
        console.log("Item #: " + res[i].id + " Product: " + res[i].product_name + " is out of stock")
      )
      console.log("-----------------------------------------------");
    };
  selection(res);
  })
}  

function selection(res) {
  // prompt for item selection
  inquirer.prompt({
    name: "purchaseItem",
    type: "choice",
    message: "Enter Item # for product you would like to buy:",
    choices: (1 - 1000)
  })
  .then(function(answer) {
    var selectedItem = res[answer.purchaseItem - 1];
    // validate response
    if(!selectedItem){
      console.log("Invalid entry, please make another selection");
      selection(res);
    }
    // check if in stock
    else if(selectedItem.stock_quantity <= 0){
       console.log("We are out of " + selectedItem.product_name + " please make another selection");
       selection(res);;
    }
    // send to purchase function
    else{
      console.log("You have selected " + selectedItem.product_name);
      console.log(selectedItem.product_name + " costs $" + selectedItem.price + " per " + selectedItem.unit)
      purchaseQuantityPrompt(selectedItem);
    }
    
  });
};


function purchaseQuantityPrompt(selectedItem){
  inquirer.prompt({
    name: "quantity",
    type: "choice",
    message: "How many " + selectedItem.units + " do you want to purchase?",
    // all available ids
    // choices: idArray
    choices: (1 - 1000)
  })
  .then(function(answer) {
    var quantity = answer.quantity;
    // validate response
    if(quantity < 0){
      console.log("Invalid entry, please enter a positive number");
      purchaseQuantityPrompt(selectedItem);
    }
    else if(quantity == 0){
      console.log("That's okay. Perhaps you want to buy something else?");
      populateStore();
    }
    // check if in stock
    else if(quantity > selectedItem.stock_quantity){
      console.log("We're sorry. We only have " + selectedItem.stock_quantity + " " + selectedItem.units + ".");
      purchaseQuantityPrompt(selectedItem);
    }
    // send to purchase function
    else{
      console.log("You have selected " + selectedItem.product_name);
      console.log(selectedItem.product_name + " costs $" + selectedItem.price + " per " + selectedItem.unit + ".");
      purchaseConfirmation(selectedItem, quantity);
    }
    
  });
}

function purchaseConfirmation(selectedItem, quantity){
  inquirer.prompt({
    name: "pConfirm",
    type: "confirm",
    message: quantity + " " + selectedItem.units + " will cost $" + (selectedItem.price * quantity) + ". Are you sure you want to purchase?",
  })
  .then(function(answer) {
    if(!answer.pConfirm){
      console.log("That's okay. Would you like to buy something else?")
      populateStore();;
    }  
    else{
      console.log("Thank you for your purchase! Please come again.");
      connection.query("UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: selectedItem.stock_quantity - quantity
          },
          {
            product_name: selectedItem.product_name
          }
        ], 
        function(err, res){            
          if (err) throw err;
          populateStore();
        }
      )
    };
  });
};