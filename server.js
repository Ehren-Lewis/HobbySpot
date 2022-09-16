const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const path = require("path");
const expressSession = require("express-session");
// import sequelize connection
const sequelize = require("./config/connection.js")
const app = express();
const PORT = process.env.PORT || 3001;
app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

//handlebars routing
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  extname: '.handlebars',
}));
app.set('view engine', 'handlebars');

//cookies setup

// const SequelizeStore = require("connect-session-sequelize")(session.Store);


// sync sequelize models to the database, then turn on the server


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
