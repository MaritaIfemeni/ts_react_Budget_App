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

      <section>
        <Incomes />
      </section>

      <section>
        <Expenses />
      </section>

      <section>
        <Savings />
      </section>

      <section>
        <Balance />
      </section>

    </div>
  );
}

export default App;
