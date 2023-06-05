const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// custom static method
// reqular function to be able to use "this" keyword
userSchema.statics.signup = async function (email, password) {
  // validate email and password
  if (!email || !password) {
    throw Error("Email or password is empty");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email format");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Weak password");
  }

  // check that email is unique
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error ('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if(!user) {
        throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect password');
    }

    return user;
}

module.exports = mongoose.model("User", userSchema);
