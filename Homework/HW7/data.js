//load module
const mongoose = require('mongoose');
const connectDB = require('./modules/db');

connectDB(true);

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  DateTime: String,
});

const User = mongoose.model('User', userSchema);
const regUser = {
  firstName: 'John',
  lastName: 'Doe',
  DateTime: new Date().toLocaleString(),
};

//save user
  const user = new User(regUser);
  user.save().then(() => {
    console.log('Data saved successfully.');
    connectDB(false);
  });
