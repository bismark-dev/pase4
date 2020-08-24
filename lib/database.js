const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/PaseCovidAPI';

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const schema = mongoose.Schema({
    country: String,
    Active: Number,
    Deaths: Number,
    Recoveries: Number,
    Comfirmed: Number,
    Date: String,
});

const Case = mongoose.model('Case', schema);

module.exports = Case;