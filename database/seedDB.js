//forgot that I had to create a branch. Please review the seedDB.js file. Thanks!
const loremIpsum = require("lorem-ipsum").loremIpsum;
const mysql = require('mysql');
var random = require('random-name')

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


let seekerCity = ['San Francisco', 'San Francisco', 'San Francisco', 'San Mateo', 'San Mateo', 'San Mateo', 'San Mateo'];
let seekerZip = ['94103', '94103','94103','94403', '94403', '94403', '94403'];
let seekerLat = [37.77908068126272, 37.759858513184625, 37.795088892756596, 37.557541675686046, 37.55536431413384, 37.55427560949978, 37.54937624182345];
let seekerLong = [-122.40566708984375, -122.4148178100586, -122.41493680419921, -122.27142382723036, -122.27520037752333, -122.28309680086318, -122.2679905996913];

for (let i = 0; i < 7; i++) {
  let name = random.first();
  let location_city = seekerCity[i];
  let zip_code = seekerZip[i];
  let lat = seekerLat[i];
  let long = seekerLong[i];
  let location_state = 'CA'
  let contact_info = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 3,
    sentenceUpperBound: 6,
    units: "sentences"
  });
  let i_need = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 10,
    sentenceUpperBound: 20,
    units: "sentences"
  });
  let notes = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 10,
    sentenceUpperBound: 20,
    units: "sentences"
  });
  let sql = `INSERT INTO seekers
  VALUES (${i + 1}, "${name}", "${location_city}", "${location_state}", ${zip_code},  ${lat}, ${long}, "${contact_info}", "${i_need}", "${notes}");`
  connection.query(sql,function (err, result, fields) {
    if (err) throw err;
    console.log(result);

  });
}
let helperCity = ['San Francisco', 'San Francisco', 'San Francisco', 'San Mateo', 'San Mateo'];
let helperZip = ['94103', '94103','94103','94403', '94403'];
let helperLat = [37.749204031028704, 37.77770232837236, 37.78075532805877, 37.560263288157394, 37.5651619400851];
let helperLong = [-122.41901989425287, -122.48287792647943, -122.47249603271484, -122.31021929842177, -122.30232287508193];

//seedDB for listing_images
for (let i = 0; i < 5; i++) {
  let name = random.first();
  let location_city = helperCity[i]
  let location_state = 'CA'
  let lat = helperLat[i];
  let long = helperLong[i];
  let zip_code = helperZip[i]
  let contact_info = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 3,
    sentenceUpperBound: 6,
    units: "sentences"
  });
  let i_can = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 10,
    sentenceUpperBound: 20,
    units: "sentences"
  });
  let notes = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 10,
    sentenceUpperBound: 20,
    units: "sentences"
  });
  let sql = `INSERT INTO helpers
  VALUES (${i + 1}, "${name}", "${location_city}", "${location_state}", ${zip_code}, ${lat}, ${long},"${contact_info}", "${i_can}", "${notes}");`
  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}




