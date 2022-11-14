const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const { connect: mongoInit } = require("./connection");
const caseDataRouter = require("./routes");

const responseFactory = require("./response");

const port = config.development.port;

mongoInit().then();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/caseDetails", caseDataRouter);

app.use((req, res) => {
  responseFactory.sendNotFound({ res });
});

app.use(function (err, req, res, next) {
  res.status(err.status).send({ code: err.status, message: err });
});

app.listen(port, function (res, res) {
  console.log(`server connected at port: ${port}`);
});
