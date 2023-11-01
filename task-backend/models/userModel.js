const { default: mongoose } = require("mongoose");

const { Schema } = mongoose
const userSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});

module.exports=mongoose.model("user",userSchema)