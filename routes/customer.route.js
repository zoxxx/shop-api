module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    // customer buys article
    app.post("/customer/buy/:articleId", customer.buy);
      
    // create a new user
    app.get("/customers", customer.findAll);
  };