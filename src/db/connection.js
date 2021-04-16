const mongoose = require("mongoose");

var conn = mongoose.createConnection(
  process.env.CONN_STRING ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

exports.pool = conn;