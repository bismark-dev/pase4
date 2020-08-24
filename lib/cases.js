const csv = require('fast-csv');
const request = require('request');

const countries = require('./countries');
const Case = require('./database');

function getCases(url, countries, cases) {
    const cases = [];

    csv.parseStream(request(url))
        .on('data', (row) => {
            if (countries.includes(row[3])) {
                cases.push({
                    Country: row[3],
                    Confirmed: row[7],
                    Active: row[10],
                    Recoveries: row[9],
                    Deaths: row[8],
                    UpdatedOn: row[4],
                });
            }
        })
        .on('end', () => {
            console.log(cases);
            console.log('File read successfully....');
            Case.insertMany(cases, (err, docs) => {
                if (err)
            });
        });
    return cases;
}

module.exports = getCases;