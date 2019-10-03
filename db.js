const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection is open.');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected.');
});

mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));

process.on('SIGINT', () => {
  mongoose.disconnect(() => {
    console.log('Mongoose default connection disconnected through app termination.');
    process.exit(0);
  });
});