const express = require('express');
const Case = require('./lib');
const countries = require('./lib/countries');
const getcases = require('./lib/cases');

const url =
    'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_daily_reports/08-19-2020.csv';

const PORT = process.env.PORT || 5000;
getcases(url, countries);

const app = express();
app.use(express.json());

app.get('api/v1', function(req, res) {
    res.status(200).json();
});

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT} .....`);
});