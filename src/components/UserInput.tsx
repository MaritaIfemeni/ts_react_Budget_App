import React, { useState } from "react";


interface Income {
    name: string;
    amount: number;
    dateReceived: string;
  }

const UserInput = () => {
    const [income, setIncome] = useState<Income | null>(null);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(Number(e.target.value));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const date = new Date().toLocaleDateString();
      const newIncome = { name, amount, dateReceived: date };
      setIncome(newIncome);
    };
  
    return {
      income,
      nameInput: { value: name, onChange: handleNameChange },
      amountInput: { value: amount, onChange: handleAmountChange },
      handleSubmit,
    };
  };

    export default UserInput;