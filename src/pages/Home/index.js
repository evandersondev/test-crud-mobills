import React, { useEffect } from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { CardContainer } from "./styles";

// Actions
import addExpensesAction from "../../store/actions/addExpensesAction";

//utils
import columns from "../../utils/columns";
import { addExpense, deleteExpense, updateExpense } from "../../utils/firebase";
import { filterPaid, filterExpense } from "../../utils/filterPaidAndExpense";

//firebase
import { db } from "../../firebase";

export default function Home() {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);

  //Read
  const getExpenses = async () => {
    const response = db.collection("expenses");
    const data = await response.get();
    const docs = data.docs.map(doc => {
      return {
        id: doc.id,
        value: doc.data().value,
        description: doc.data().description,
        date: new Date(doc.data().date).toLocaleString("en-ZA", {
          dateStyle: "short"
        }),
        paid: doc.data().paid,
        rs: doc.data().rs
      };
    });
    dispatch(addExpensesAction(docs));
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Container>
      <CardContainer>
        <Card className="card">
          <CardContent>
            <Typography variant="subtitle1" component="h2">
              Total Paid
            </Typography>
            <Typography variant="h4" component="h2">
              {filterPaid(expenses)}
            </Typography>
          </CardContent>
        </Card>

        <Card className="card" id="cardExpenses">
          <CardContent>
            <Typography variant="subtitle1" component="h2">
              Total Expenses
            </Typography>
            <Typography variant="h4" component="h2">
              {filterExpense(expenses)}
            </Typography>
          </CardContent>
        </Card>
      </CardContainer>
      <MaterialTable
        options={{
          pageSizeOptions: [8],
          headerStyle: {
            background: "#ffc000",
            color: "#fff",
            fontWeight: "bold"
          }
        }}
        style={{ padding: 30, marginBottom: 30 }}
        title="Expenses"
        columns={columns}
        data={expenses}
        editable={{
          onRowAdd: e =>
            new Promise(resolve => {
              setTimeout(() => {
                addExpense(e);
                resolve();
                getExpenses();
              }, 1000);
            }),
          onRowUpdate: e =>
            new Promise(resolve => {
              setTimeout(() => {
                updateExpense(e);
                resolve();
                getExpenses();
              }, 1000);
            }),
          onRowDelete: e =>
            new Promise(resolve => {
              setTimeout(() => {
                deleteExpense(e.id);
                resolve();
                getExpenses();
              }, 1000);
            })
        }}
      />
    </Container>
  );
}
