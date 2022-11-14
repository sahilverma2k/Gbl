var connection = require("./connection");
const responseFactory = require("./response");

const fetchCaseData = async (req, res, next) => {
  try {
    var db = connection.getDB();
    console.log("db is here");
    console.log(db);
    const doc = req.body;
    const caseData = await db.collection("caseData").find({}).toArray();
    console.log(caseData);
    responseFactory.sendSuccess({
      res,
      message: "Case data fetched sucessfully",
      data: caseData,
    });
  } catch (err) {
    responseFactory.sendForbidden({
      res,
      message: `Case data fetch failed - ${err.message}`,
    });
  }
};

module.exports = {
  fetchCaseData,
};
