import React from "react";

const Expenses = () => {
  return (
    <div>
      <h3>Expenses</h3>
      <form>
        <label htmlFor="expense-name">Expense type:</label>
        <br></br>
        <input type="text" id="expense-name" />
        <br></br>
        <label htmlFor="expense-amount">Amount:</label>
        <br></br>
        <input type="number" id="expense-amount" />
        <br></br>
        <label htmlFor="expense-date">Date paid:</label>
        <br></br>
        <input type="date" id="expense-date" />
        <br></br>
        <button type="submit">Add Expense</button>
        <br></br>
      </form>
      <ul>
        <li>Income 1 etc</li>
      </ul>
    </div>
  );
};

export default Expenses;
