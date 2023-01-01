// import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Toilet", amount: "167", date: new Date(2022, 3, 4) },
    { title: "Milk", amount: "55", date: new Date(2022, 11, 27) },
    { title: "Tea", amount: "100", date: new Date(2022, 9, 22) },
    { title: "Coffe", amount: "180", date: new Date(2022, 5, 12) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
