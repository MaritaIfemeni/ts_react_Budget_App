import React, { useEffect, useState } from "react";
import UserInput from "./UserInput";
import Balance from "./Balance";

interface Income {
    name: string;
    amount: number;
    dateReceived: string;
  }

const Incomes = () => {
    const { income, nameInput, amountInput, handleSubmit } = UserInput();
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [totalIncome, setTotalIncome] = useState(0);
  
    useEffect(() => {
      if (income) {
        setIncomes((prevIncomes) => [...prevIncomes, income]);
        setTotalIncome((prevTotal) => prevTotal + income.amount);
      }
    }, [income]);
  
    return (
      <div>
        <h3>Incomes</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="income-name">Income source:</label>
          <br />
          <input type="text" id="income-name" {...nameInput} />
          <br />
          <label htmlFor="income-amount">Amount:</label>
          <br />
          <input type="number" id="income-amount" {...amountInput} />
          <br />
          <label htmlFor="income-date">Date received:</label>
          <br />
          <input type="date" id="income-date" value={new Date().toLocaleDateString()} />
          <br />
          <button type="submit">Add Income</button>
          <br />
        </form>
        <ul>
          {incomes.map((income: any, index: number) => (
            <li key={index}> {income.dateReceived} - 
              {income.name} - ${income.amount}
            </li>
          ))}

        </ul>
        <p>Total Income: ${totalIncome}</p>
        <Balance totalIncome={totalIncome} />
      </div>
    );
  };
  
export default Incomes;
