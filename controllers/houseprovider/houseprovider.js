var express = require("express");
var router = express.Router();
var houseProviderModel = require.main.require("./models/houseprovider-model");
var maidModel = require.main.require("./models/maid-model");

router.get("*", function (req, res, next) {
  if (req.cookies["uname"] == null) {
    res.redirect("/login");
  } else {
    next();
  }
});
router.get("/", function (req, res) {
  houseProviderModel.getByUname(req.cookies["uname"], function (result) {
    res.render("houseprovider/index", {
      user: result,
    });
  });
});

router.get("/view_Customers", function (req, res) {
  houseProviderModel.getAllAvailableCustomer(function (results) {
    if (results.length > 0) {
      res.render("houseprovider/view_Customers", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/view_Customers", {
        userlist: results,
      });
    }
  });
});
router.get("/assign_maid", function (req, res) {
  maidModel.getAllMaids(function (maids) {
    res.render("houseprovider/assign_maid", {
      maids: maids,
    });
  });
});

router.get("/view_inCustomers", function (req, res) {
  houseProviderModel.getAllinCustomer(req.cookies["uname"], function (results) {
    console.log(results.length);
    if (results.length > 0) {
      res.render("houseprovider/view_inCustomers", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/view_inCustomers", {
        userlist: results,
      });
    }
  });
});

router.get("/viewOwn", function (req, res) {
  houseProviderModel.getAllHouse(req.cookies["uname"], function (results) {
    if (results.length > 0) {
      res.render("houseprovider/viewOwn", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/viewOwn", {
        userlist: results,
      });
    }
  });
});
router.get("/view_Rented", function (req, res) {
  houseProviderModel.getAllRentedHouse(function (results) {
    if (results.length > 0) {
      res.render("houseprovider/view_Rented", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/view_Rented", {
        userlist: results,
      });
    }
  });
});

router.post("/newAdvertise", function (req, res) {
  var house = {
    hid: "13",
    hname: req.body.hname,
    Area: req.body.Area,
    output: req.body.output,
    faddress: req.body.faddress,
    size: req.body.size,
    addescription: req.body.addescription,
    price: req.body.price,
  };
  console.log(house);
  houseProviderModel.insert(house, function (result) {
    res.render("houseprovider/viewOwn", {
      user: result,
    });
  });
});
router.get("/newAdvertise", function (req, res) {
  houseProviderModel.getByUname(req.cookies["uname"], function (result) {
    res.render("houseprovider/newAdvertise", {
      user: result,
    });
  });
});

router.get("/view_Available", function (req, res) {
  houseProviderModel.getAllAvailableHouses(function (results) {
    if (results.length > 0) {
      res.render("houseprovider/view_Available", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/view_Available", {
        userlist: results,
      });
    }
  });
});
router.get("/profile", function (req, res) {
  houseProviderModel.getByUname(req.cookies["uname"], function (result) {
    res.render("houseprovider/profile", {
      user: result,
    });
  });
});

router.get("/newAdvertise", function (req, res) {
  houseProviderModel.insert(req.cookies["uname"], function (result) {
    res.render("houseprovider/viewOwn", {
      user: result,
    });
  });
});
router.get("/view_Rented", function (req, res) {
  houseProviderModel.getAllRentedHouse(function (results) {
    if (results.length > 0) {
      res.render("houseprovider/view_Rented", {
        userlist: results,
      });
    } else {
      res.render("houseprovider/view_Rented", {
        userlist: results,
      });
    }
  });
});

/*router.get('/viewOwn', function (req, res) {
    var a = req.cookies['uname'];
	houseProviderModel.getMyHouses(a, function (result) {
		if (results.length > 0) {
			res.render('houseprovider/viewOwn', {
				userlist: results
			});
		} else {
			res.render('houseprovider/viewOwn', {
				userlist: results
			});
		}
	});

});*/

router.post("/profile", function (req, res) {
  if (req.body.password == req.body.cpassword) {
    var user = {
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.uname,
      fathersName: req.body.fathersName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      area: req.body.area,
    };

    houseProviderModel.updateProfile(user, function (status) {
      if (status) {
        res.redirect("/houseprovider");
      } else {
        res.redirect("/houseprovider/profile");
      }
    });
  } else {
    res.send("password mismatch");
  }
});
router.get("/view_Rented/:houseid", function (req, res) {
  houseProviderModel.deleteHouse(req.params.houseid, function (status) {
    if (status) {
      res.redirect("/houseprovider/view_Rented");
    } else {
      res.send("error");
    }
  });
});
router.get("/view_Available/:houseid", function (req, res) {
  houseProviderModel.deleteHouse(req.params.houseid, function (status) {
    if (status) {
      res.redirect("/houseprovider/view_Available");
    } else {
      res.send("error");
    }
  });
});
router.get("/view_Customers/:username", function (req, res) {
  houseProviderModel.getCutomerProfile(req.params.username, function (result) {
    res.render("houseprovider/getProfile", {
      user: result,
      table: "customerinfo",
    });
  });
});

/*router.get('/view_inCustomers/:customername', function (req, res) {
	houseProviderModel.getinCutomerProfile(req.params.customername, function (result) {
		res.render('houseprovider/getProfile', {
			user: result,
			table: 'customerinfo'
		});
	});

});*/
router.get("/customerinfo/:customername", function (req, res) {
  houseProviderModel.getCutomerProfile(
    req.params.customername,
    function (result) {
      if (result.status == "block") {
        var user = {
          customername: req.params.customername,
          status: "unblock",
        };
      } else {
        var user = {
          customername: req.params.customername,
          status: "block",
        };
      }
      houseProviderModel.customerStatus(user, function (status) {
        if (status) {
          houseProviderModel.getCutomerProfile(
            req.params.customername,
            function (result) {
              res.render("admin/getProfile", {
                user: result,
                table: "customerinfo",
              });
            }
          );
        } else {
          res.send("error");
        }
      });
    }
  );
});
router.get("/viewOwn/:houseid", function (req, res) {
  houseProviderModel.deleteHouse(req.params.houseid, function (status) {
    if (status) {
      res.redirect("/houseprovider/viewOwn");
    } else {
      res.send("error");
    }
  });
});

module.exports = router;
