const createError = require("http-errors");
const express = require("express");
const path = require("path");
const schedule = require("node-schedule");

const { UserModal } = require("./models/v1/Schema");

require("dotenv").config();
var cors = require("cors");

const logger = require("morgan");
const port = process.env.PROT || 1337;

const db = require("./db/config");

const IndexRoutes = require("./routes/v1/index");
const UserRoutes = require("./routes/v1/Users");

if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

const app = express();
var server = require("http").createServer(app);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = express.Router();

db.Connect();
const PORT = process.env.PORT;

// app.use('/api/v1' , router)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/", IndexRoutes);
app.use("/api/v1/users", UserRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

// cron job to make everybody's status as false at the end of month
const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.date = 1;
rule.tz = "Japan";
schedule.scheduleJob(rule, async function () {
  console.log("inside Schedule");
  UserModal.updateMany({ status: true }, { status: false }, function (e, docs) {
    if (e) {
      console.error(e);
    } else {
      console.log("Docs Updated");
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    name: "Flexmoney assignment RESTful API",
    message: "NOT FOUND",
  });
});
