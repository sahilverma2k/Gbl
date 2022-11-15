const priT = {
  low: 0,
  medium: 1,
  high: 2,
};

export const isEverythingEmpty = (obj) => {
  let a = true;
  Object.values(obj).forEach((i) => {
    if (i.length !== 0) {
      a = false;
    }
  });
  return a;
};

const sortByAlpha = (A, B) => {
  if (A > B) {
    return 1;
  }
  if (A < B) {
    return -1;
  }
  return 0;
};

const sortPriority = (A, B) => {
  const _A = A.toLowerCase();
  const _B = B.toLowerCase();

  //   console.log(_A, _B);
  //   console.log(priT[_A], priT[_B]);

  if (priT[_A] > priT[_B]) {
    return 1;
  }
  if (priT[_A] < priT[_B]) {
    return -1;
  }
  return 0;
};

const sortDate = (A, B) => {
  const _A = new Date(A);
  const _B = new Date(B);

  if (_A > _B) return 1;
  if (_A < _B) return -1;
  return 0;
};

export const sortingFunc = (a, b, currentSort) => {
  if (currentSort === "") {
    return 0;
  } else {
    switch (currentSort) {
      case "branch":
        return sortByAlpha(a.branch, b.branch);
      case "reportingMethod":
        return sortByAlpha(a.reportingMethod, b.reportingMethod);
      case "category":
        return sortByAlpha(a.category, b.category);
      case "subCategory":
        return sortByAlpha(a.subCategory, b.subCategory);
      case "priority":
        return sortPriority(a.priority, b.priority);
      case "nature":
        return sortByAlpha(a.nature, b.nature);
      case "date":
        return sortDate(a.date, b.date);
      case "caseManager":
        return sortByAlpha(a.caseManager, b.caseManager);
      case "caseReporter":
        return sortByAlpha(a.caseReporter, b.caseReporter);
      case "caseStatus":
        return sortByAlpha(a.caseStatus, b.caseStatus);

      default:
        break;
    }
  }
};
