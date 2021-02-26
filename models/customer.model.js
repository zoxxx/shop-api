const sql = require("./database.js");
const tableName = "customers";

// constructor
const Customer = function(customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.address = customer.address;
  this.article_id = customer.article_id;
};

Customer.buy = (newCustomer, result) => {
  sql.query("INSERT INTO " + tableName + " SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = Customer;