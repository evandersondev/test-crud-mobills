const columns = [
  { title: "Description", field: "description" },
  { title: "Date", field: "date", type: "date" },
  {
    title: "",
    field: "rs",
    editable: "never",
    initialEditValue: "$",
    type: "numeric"
  },
  { title: "Value", field: "value", type: "numeric" },
  {
    title: "Paid",
    field: "paid",
    lookup: { 10: "Yes", 11: "No" }
  }
];

export default columns;
