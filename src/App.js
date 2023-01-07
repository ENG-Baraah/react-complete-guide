// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Toilet", amount: "167", date: new Date(2022, 3, 4) },
  { id: "e2", title: "Milk", amount: "55", date: new Date(2020, 11, 27) },
  { id: "e3", title: "Tea", amount: "100", date: new Date(2022, 9, 22) },
  { id: "e4", title: "Coffe", amount: "180", date: new Date(2019, 5, 12) },
  { id: "e5", title: "Salt", amount: "180", date: new Date(2020, 5, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("In App");
    // console.log(expense);
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
