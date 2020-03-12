export const filterPaid = expense => {
  const getPaid = expense.filter(item => item.paid === "10");

  const getValue = getPaid.map(item => item.value);

  const getSum = getValue.reduce((tot, num, int) => {
    return parseFloat(tot) + parseFloat(num);
  }, 0);

  return getSum.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const filterExpense = expense => {
  const getPaid = expense.filter(item => item.paid === "11");

  const getValue = getPaid.map(item => item.value);

  const getSum = getValue.reduce((tot, num, int) => {
    return parseFloat(tot) + parseFloat(num);
  }, 0);

  return getSum.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
