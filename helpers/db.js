const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log('MongoDB: Connected')
        })
        .catch(onRejected => {
            console.log('MondoDB: Error', onRejected);
        });
}