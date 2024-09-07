const productsrouter = require("./product.router");
const homerouter = require("./home.router")

module.exports = (app) =>{
   
    app.use("/",homerouter);
    app.use("/products",productsrouter);
      
      
}