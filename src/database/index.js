const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://matheuscastro:matheus123@node-api-eed5m.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:  true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;