// var express = require("express");
// var router = express.Router();
// var searchModel = require.main.require("./models/search-model");

// router.get("/", function (req, res) {
//   searchModel.getAllHouse(function (result) {
//     res.render("search/index", {
//       userlist: result,
//     });
//   });
// });

// router.get("/:houseid", function (req, res) {
//   if (req.cookies["uname"] != null) {
//     searchModel.getHouseProfile(req.params.houseid, function (result) {
//       res.render("search/houseProfile", {
//         user: result,
//       });
//     });
//   } else {
//     res.render("search/verified");
//   }
// });
// router.post("/", function (req, res) {
//   var house = {
//     division: req.body.Area,
//     area: req.body.output,
//     size: req.body.size,
//     price: req.body.price,
//   };
//   searchModel.getFilteredHouse(house, function (result) {
//     res.render("search/index", {
//       userlist: result,
//     });
//   });
// });
// router.get("/search", (req, res) => {
//   const sql = 'SELECT * FROM houses WHERE status = "available"'; // Adjust query as needed

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).send("Internal Server Error");
//     }

//     res.render("customer/index", { userlist: results }); // Pass results as userlist
//   });
// });
// module.exports = router;

// var express = require("express");
// var router = express.Router();
// var searchModel = require.main.require("./models/search-model");

// router.get("/", function (req, res) {
//   searchModel.getAllHouse(function (result) {
//     res.render("search/index", {
//       userlist: result,
//     });
//   });
// });

// router.get("/:houseid", function (req, res) {
//   // Removed the cookie check
//   searchModel.getHouseProfile(req.params.houseid, function (result) {
//     res.render("search/houseProfile", {
//       user: result,
//     });
//   });
// });

// router.post("/", function (req, res) {
//   var house = {
//     division: req.body.Area,
//     area: req.body.output,
//     size: req.body.size,
//     price: req.body.price,
//   };
//   searchModel.getFilteredHouse(house, function (result) {
//     res.render("search/index", {
//       userlist: result,
//     });
//   });
// });

// router.get("/search", (req, res) => {
//   const sql = 'SELECT * FROM houses WHERE status = "available"'; // Adjust query as needed

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).send("Internal Server Error");
//     }

//     res.render("customer/index", { userlist: results }); // Pass results as userlist
//   });
// });

// module.exports = router;

var express = require("express");
var router = express.Router();
var searchModel = require.main.require("./models/search-model");

router.get("/", function (req, res) {
  searchModel.getAllHouse(function (result) {
    res.render("search/index", {
      userlist: result,
    });
  });
});

router.get("/:houseid", function (req, res) {
  // Check if the user is a logged-in customer
  let isCustomerLoggedIn = false; // Default to false
  if (req.cookies["uname"] && req.cookies["role"] === "Customer") {
    isCustomerLoggedIn = true;
  }

  searchModel.getHouseProfile(req.params.houseid, function (result) {
    res.render("search/houseProfile", {
      user: result,
      isCustomerLoggedIn: isCustomerLoggedIn, // Pass the flag to the view
    });
  });
});
router.post("/", function (req, res) {
  var house = {
    division: req.body.Area,
    area: req.body.output,
    size: req.body.size,
    price: req.body.price,
  };
  searchModel.getFilteredHouse(house, function (result) {
    res.render("search/index", {
      userlist: result,
    });
  });
});

router.get("/search", (req, res) => {
  const sql = 'SELECT * FROM houses WHERE status = "available"'; // Adjust query as needed

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Internal Server Error");
    }

    res.render("customer/index", { userlist: results }); // Pass results as userlist
  });
});

module.exports = router;
