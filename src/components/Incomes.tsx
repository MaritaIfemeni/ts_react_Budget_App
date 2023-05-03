import React, { useState } from "react";

interface Income {
  name: string;
  amount: number;
  date: string;
}

interface IncomeProps {
  addedIncome: (amount: number) => void;
}

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};

const Incomes = ({ addedIncome }: IncomeProps) => {
  const inputType = useInput();
  const inputAmount = useInput();
  const inputDate = useInput();
  const [incomes, setIncomes] = useState<Income[]>([]);
  
  const addIncomes = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(inputAmount.value);
    const newIncome: Income = {
      name: inputType.value,
      amount: amount,
      date: new Date(inputDate.value).toLocaleDateString("en-US", {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
      }),
    };
    setIncomes([...incomes, newIncome]);
    addedIncome(amount);
  };

  return (
    <div>
      <h3>Incomes</h3>
      <form onSubmit={addIncomes}>
        <label htmlFor="income-name">Income source:</label>
        <br />
        <input type="text" id="income-name" {...inputType} />
        <br />
        <label htmlFor="income-amount">Amount:</label>
        <br />
        <input type="number" id="income-amount" {...inputAmount} />
        <br />
        <label htmlFor="income-date">Date received:</label>
        <br />
        <input type="date" id="income-date" {...inputDate} />
        <br />
        <button type="submit">Add Income</button>
        <br />
      </form>
      <ul>
        {incomes.map((income: any, index: number) => (
          <li key={index}>
            {income.date} - {income.name} - £{income.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Incomes;
