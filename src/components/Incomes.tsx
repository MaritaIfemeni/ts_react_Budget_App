import React from "react";

const incomes = () => {
  return (
    <div>
      <h3>Incomes</h3>
      <form>
        <label htmlFor="income-name">Income source:</label>
        <br></br>
        <input type="text" id="income-name" />
        <br></br>
        <label htmlFor="income-amount">Amount:</label>
        <br></br>
        <input type="number" id="income-amount" />
        <br></br>
        <label htmlFor="income-date">Date received:</label>
        <br></br>
        <input type="date" id="income-date" />
        <br></br>
        <button type="submit">Add Income</button>
        <br></br>
      </form>
        <ul>
            <li>Income 1 etc</li>
        </ul>
    </div>
  );
};

export default incomes;
