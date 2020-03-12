import { db } from "../firebase";

// Create
export const addExpense = e => {
  db.collection("expenses").add({
    ...e,
    date: new Date(e.date).toISOString()
  });
};

// Delete
export const deleteExpense = e => {
  db.collection("expenses")
    .doc(e)
    .delete();
};

// Update
export const updateExpense = e => {
  db.collection("expenses")
    .doc(e.id)
    .update({
      ...e,
      date: new Date(e.date).toISOString()
    });
};
