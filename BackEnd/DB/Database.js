const mongoose = require("mongoose");
const Database =async()=>{
 mongoose
  .connect(process.env.DB_String, {
  })
  .then(console.log("Database connected successfully"))
  .catch(err=>console.log(err));
}
  
module.exports = Database;
