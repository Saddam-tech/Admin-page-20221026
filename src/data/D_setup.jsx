export const D_feeListHeader = [
  "No",
  "Type",
  "Area (tonnes)",
  "Amount (USD)",
  "Manager ID",
  "Update date",
];

export const D_feeList = [
  {
    no: 3,
    type: "Registration fee",
    minArea: 10001,
    amount: 1500,
    managerId: "ioimmoj@gmail.com",
    date: new Date(),
  },
  {
    no: 2,
    type: "Registration fee",
    minArea: 1,
    maxArea: 10000,
    amount: 1500,
    managerId: "ioimmoj@gmail.com",
    date: new Date(),
  },
  {
    no: 1,
    type: "Registration fee",
    areaAll: true,
    amount: 1500,
    managerId: "ioimmoj@gmail.com",
    date: new Date(),
  },
];

export const D_feeTypeList = ["Registration fee", "Offset cost"];
