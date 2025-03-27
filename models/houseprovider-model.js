var db = require('./db');

module.exports = {
	getCutomerProfile: function (username, callback) {
		var sql = "select * from customerinfo where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
getCutomerProfile: function (username, callback) {
		var sql = "select * from customerinfo where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	
	customerStatus: function (user, callback) {
		var sql = "update customerinfo set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	
	
	getOwnersProfile: function (username, callback) {
		var sql = "select * from houseownerinfo where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getAllPendingCustomer: function (callback) {
		var sql = "select * from customerinfo where type=?";
		db.getResults(sql, ['pending'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllPendingHouseowner: function (callback) {
		var sql = "select * from houseownerinfo where type=?";
		db.getResults(sql, ['pending'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllAvailableHouseowner: function (callback) {
		var sql = "select * from houseownerinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllAvailableCustomer: function (callback) {
		var sql = "select * from customerinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	
		getAllAvailableCustomer: function (callback) {
		var sql = "select * from customerinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllAvailableHouse: function (callback) {
			console.log("caught");
		var sql = "select * from houseinfo where status=?";
		db.getResults(sql, ['available'], function (results) {
		
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllRentedHouse: function (callback) {
		var sql = "select * from houseinfo where =? order by size desc";
		db.getResults(sql, ['rented'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getMyHouses: function (a,callback) {
		var sql = "select * from houseinfo where ownersname=";
		db.getResults(sql, [a], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
		getAllAvailableCustomer: function (callback) {
		var sql = "select * from customerinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
		getAllHouse: function (username,callback) {
		var sql = "select * from houseinfo where order by houseid desc";
		db.getResults(sql,[username],function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	
	getAllinCustomer: function (username,callback) {
		var sql = "select * from incustomerinfo where houseownername=?";
		console.log(sql);
		db.getResults(sql,[username],function (results) {
			console.log(results.length);
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	
	validate: function (user, callback) {
		var sql = "SELECT * FROM houseownerinfo where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	getCutomerProfile: function (username, callback) {
		var sql = "select * from customerinfo where username=?";
		db.getResults(sql, [username], function (results) {
			console.log(results);
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getAllHouse: function (username,callback) {
		var sql = "select * from houseinfo where ownersname=?";
		db.getResults(sql,[username],function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
		getAllAvailableHouses: function (callback) {
		var sql = "select * from houseinfo where status=?";
		db.getResults(sql, ['available'], function (results) {
			console.log("caught");
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	insert: function(house, callback){
		var sql = "insert into houseinfo values(?,?,?,?,?,?,?,?,?,?)";
		db.execute(sql, [house.hid,house.hname, house.Area, house.output, house.faddress, house.size,house.addescription,house.price,'no','available',], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname: function (username, callback) {
		var sql = "select * from houseownerinfo where username=?";
		db.getResults(sql, [username], function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	updateProfile: function (user, callback) {
		var sql = "update houseownerinfo set fname=?,lname=?, username=?, password=?, email=?,phone=?,fathersName=? where username=?";
		db.execute(sql, [user.fname, user.lname, user.username, user.password, user.email, user.phone, user.fathersName, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	acceptCustomer: function (username, callback) {

		var sql = "update customerinfo set type=? where username=?";
		db.execute(sql, ['available', username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	deleteCustomer: function (username, callback) {
		var sql = "delete from customerinfo where username=?";
		db.execute(sql, [username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	deleteHouse: function (houseid, callback) {
		var sql = "delete from houseinfo where houseid=?";
		db.execute(sql, [houseid], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	acceptHouseOwner: function (username, callback) {

		var sql = "update houseownerinfo set type=? where username=?";
		db.execute(sql, ['available', username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	deleteHouseOwner: function (username, callback) {
		var sql = "delete from houseownerinfo where username=?";
		db.execute(sql, [username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	houseOwnersStatus: function (user, callback) {
		var sql = "update houseownerinfo set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	customerStatus: function (user, callback) {
		var sql = "update customerinfo set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}
}