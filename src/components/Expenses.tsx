import React, { useEffect, useState } from "react";

interface expense {
  name: string;
  amount: number;
  date: string;
}

interface ExpenseProps {
  addedExpense: (amount: number) => void;
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

const Expenses = ({ addedExpense }: ExpenseProps) => {
  const inputType = useInput();
  const inputAmount = useInput();
  const inputDate = useInput();
  const [expenses, setExpenses] = useState<expense[]>([]);

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(inputAmount.value);
    const newExpense: expense = {
      name: inputType.value,
      amount: amount,
      date: new Date(inputDate.value).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setExpenses([...expenses, newExpense]);
    addedExpense(amount);
  };

  return (
    <div>
      <h3>Expenses</h3>
      <form onSubmit={addExpense}>
        <label htmlFor="expense-name">Expense type:</label>
        <br></br>
        <input type="text" id="expense-name" {...inputType} />
        <br></br>
        <label htmlFor="expense-amount">Amount:</label>
        <br></br>
        <input type="number" id="expense-amount" {...inputAmount} />
        <br></br>
        <label htmlFor="expense-date">Date paid:</label>
        <br></br>
        <input type="date" id="expense-date" {...inputDate} />
        <br></br>
        <button type="submit">Add Expense</button>
        <br></br>
      </form>
      <ul>
        {expenses.map((expense: any, index: number) => (
          <li key={index}>
            {expense.dateReceived} -{expense.name} - {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
