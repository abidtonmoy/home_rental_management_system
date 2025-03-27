var db = require('./db');

module.exports = {
	getAllHouse: function (callback) {
		var sql = "select * from houseinfo where status=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getHouseProfile: function (houseid, callback) {
		var sql = "select * from houseinfo where houseid=?";
		db.getResults(sql, [houseid], function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getFilteredHouse: function (house, callback) {
		console.log(house);
		var sql = "SELECT * FROM houseinfo WHERE  status='available' and division='" + house.division + "'and area='" + house.area + "' and size " + house.size + " and prize " + house.price;
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	}

}