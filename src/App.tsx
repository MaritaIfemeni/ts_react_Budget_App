import React from "react";
import "./App.css";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";
import Savings from "./components/Savings";
import Balance from "./components/Balance";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget App</h1>
      </header>
      <main className="main">
        <section className="income">
          <Incomes />
        </section>

        <section className="expenses">
          <Expenses />
        </section>

        <section>
          <Savings />
        </section>

        <section>
       
        </section>
      </main>
    </div>
  );
}

export default App;
