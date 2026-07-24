const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dealershipsDB")
  .then(() => {
    console.log("Mongo CONNECTED");
    process.exit(0);
  })
  .catch(err => {
    console.log("FAILED:", err.message);
    process.exit(1);
  });