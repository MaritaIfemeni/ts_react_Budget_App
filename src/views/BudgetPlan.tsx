import React, { useState } from "react";
import "../App.css";

import Incomes from "../components/Incomes";
import Expenses from "../components/Expenses";
import Savings from "../components/Savings";
import Balance from "../components/Balance";

const BudgetPlan = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const addIncomes = (amount: number) => {
    setBalance((prevBalance) => prevBalance + amount);
  };
  const addExpenses = (amount: number) => {
    if (balance >= amount) {
      setBalance((prevBalance) => prevBalance - amount);
    } else {
      setErrorMessage("There is not enough money!");
    }
  };
  const transferToSavings = (amount: number) => {
    if (balance >= amount) {
      setBalance((prevBalance) => prevBalance - amount);
      setTotalIncomes((prevIncome) => prevIncome + amount);
    } else {
      setErrorMessage("There is not enough money!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget App</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </header>
      <main className="main">
        <section className="income">
          <Incomes addedIncome={addIncomes} />
        </section>
        <section className="expenses">
          <Expenses addedExpense={addExpenses} />
        </section>
        <section>
          <Savings totalIncome={totalIncomes} />
        </section>
        <section>
          <Balance
            totalIncome={totalIncomes}
            totalTransfers={transferToSavings}
          />
        </section>
      </main>
    </div>
  );
};

export default BudgetPlan;
