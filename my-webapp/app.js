const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  if (hours >= 9 && hours <= 17 && day >= 1 && day <= 5) {
    next();
  } else {
    res.send(
      "This web application is only available during working hours (Monday to Friday, 9 to 17)."
    );
  }
};
app.use(workingHoursMiddleware);
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
