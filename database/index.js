var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'HelpMyNeighbors'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const selectAllSeekers = function(location, callback) {
  connection.query('SELECT * FROM seekers LIMIT 3', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectSeekers = function(location, callback) {
  connection.query('SELECT * FROM seekers WHERE zip_code = ?', [location.zip], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectAllHelpers = function(location, callback) {
  connection.query('SELECT * FROM helpers LIMIT 3', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectHelpers = function(location, callback) {
  connection.query('SELECT * FROM helpers WHERE zip_code = ?', [location.zip], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectSeekers = selectSeekers;
module.exports.selectHelpers = selectHelpers;
module.exports.selectAllSeekers = selectAllSeekers;
module.exports.selectAllHelpers = selectAllHelpers;