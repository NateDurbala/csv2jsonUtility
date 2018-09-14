const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csvFilePath = path.join(__dirname, 'customer-data.csv');

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj, null, 2))
})