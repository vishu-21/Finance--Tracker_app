import React from "react";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <h2>Personal Finance Tracker</h2>
      <div className="container">
        <div className="left">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="right">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
