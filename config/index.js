const configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb+srv://' + configValues.user + ':' +
            configValues.pass + configValues.server1;
    }
};