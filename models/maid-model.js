// maid-model.js
var db = require("./db");

module.exports = {
  getAllMaids: function (callback) {
    var sql = "SELECT maidid, name, phone, address, status FROM maidinfo";
    console.log("SQL Query:", sql); // Log the SQL query
    db.getResults(sql, [], function (results) {
      console.log("Database Results:", results); // Log the results from the database
      if (results.length > 0) {
        callback(results);
      } else {
        callback([]);
      }
    });
  },
};
