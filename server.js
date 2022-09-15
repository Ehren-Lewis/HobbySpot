const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const expressSession = require("express-session");
const router = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



app.get("/", (req, res) => {
  res.render("main", {title:Express});
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
