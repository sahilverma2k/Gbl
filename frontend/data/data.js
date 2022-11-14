export const tableHeaders = [
  { id: "caseNo", title: "Case No" },
  { id: "branch", title: "Branch" },
  { id: "reportingMethod", title: "Reporting Method" },
  { id: "date", title: "Date" },
  { id: "time", title: "Time" },
  { id: "category", title: "Category" },
  { id: "subCategory", title: "Sub Category" },
  { id: "priority", title: "Priority" },
  { id: "nature", title: "Nature" },
  { id: "caseManager", title: "Case Manager" },
  { id: "caseReporter", title: "Case Reporter" },
  { id: "caseStatus", title: "Case Status" },
];


export const categories = {
  branch: [
    "Branch 3",
    "Branch 2",
    "Branch 1"
  ], 
  reportingMethod: [
    "In Person",
    "Remote",
    "Cell"
  ],
  category: [
    "Grievance",
    "Employment"
  ],
  subCategory: [
    "Complaints",
    "Query"
  ],
  priority: [
    "Low",
    "Medium",
    "High"
  ],
  nature: [
    "Health",
    "Property",
    "Transport"
  ],
  caseStatus: [
    "Not prepared",
    "Progress",
    "Prepared"
  ]
}