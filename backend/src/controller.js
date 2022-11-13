const responseFactory = require("./response");

const fetchCaseData = async (req, res, next) => {
  try {
    // console.log("db is here");
    // console.log(db);
    // const doc = req.body;
    // const result = await db.collection("BetDetails").insertOne(doc);
    const caseData = [
      {
        caseNo: 123123,
        branch: "Branch 3",
        reportingMethod: "In Person",
        date: "12-02-2021",
        time: "12:35:02",
        category: "Grievance",
        subCategory: "Query",
        priority: "Low",
        nature: "Health",
        caseManager: "Daryl",
        caseReporter: "Tanner",
        caseStatus: "Not prepared",
      },
      {
        caseNo: 123123,
        branch: "Branch 3",
        reportingMethod: "In Person",
        date: "12-02-2021",
        time: "12:35:02",
        category: "Grievance",
        subCategory: "Query",
        priority: "Low",
        nature: "Health",
        caseManager: "Daryl",
        caseReporter: "Tanner",
        caseStatus: "Not prepared",
      },
      {
        caseNo: 123123,
        branch: "Branch 3",
        reportingMethod: "In Person",
        date: "12-02-2021",
        time: "12:35:02",
        category: "Grievance",
        subCategory: "Query",
        priority: "Low",
        nature: "Health",
        caseManager: "Daryl",
        caseReporter: "Tanner",
        caseStatus: "Not prepared",
      },
      {
        caseNo: 123123,
        branch: "Branch 3",
        reportingMethod: "In Person",
        date: "12-02-2021",
        time: "12:35:02",
        category: "Grievance",
        subCategory: "Query",
        priority: "Low",
        nature: "Health",
        caseManager: "Daryl",
        caseReporter: "Tanner",
        caseStatus: "Not prepared",
      },
    ];

    // res.setHeader("Content-Type", "application/json");
    // res.send({ data: "user created in db" });
    responseFactory.sendSuccess({
      res,
      message: "Case data fetched sucessfully",
      data: caseData,
    });
    // console.log(result);
  } catch (err) {
    responseFactory.sendForbidden({
      res,
      message: `Case data fetch failed - ${err.message}`,
    });
  }

  // try {
  //   console.log("wnt in add stock");
  //   let doc = await stock.add(req);

  // } catch (err) {
  //   responseFactory.sendForbidden({
  //     res,
  //     message: `doc creation failed - ${err.message}`,
  //   });
  // }
};

module.exports = {
  // getStocks,
  fetchCaseData,
};
