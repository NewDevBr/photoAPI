const express = require("express");
const morgan = require("morgan");
const app = express();
const routeUsers = require("./src/routes/users.js");
const routePhotos = require("./src/routes/photos.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/imgs', express.static('src/imgs/'));
app.use('/users', routeUsers);
app.use('/photos', routePhotos);

app.use((error, req, res, next)=> {
  res.status(500);
  res.send({error: error.message})
});

app.listen(2048);