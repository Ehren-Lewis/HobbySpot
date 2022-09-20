
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers");

const path = require("path");

const sessions = require("express-session");

const dotenv = require("dotenv").config();

const SequelizeStore = require("connect-session-sequelize")(sessions.Store);
const sequelize = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(sessions(sess));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, "public")));

//handlebars routing
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".handlebars",
    helpers: {
      format_time: function (date) {
        const currentDate = new Date(date);
        const strDate = `${currentDate}`;
        return strDate.split(" ").slice(1, 4).join(" ");
      },
    },
  })
);
app.set("view engine", "handlebars");

//cookies setup

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
