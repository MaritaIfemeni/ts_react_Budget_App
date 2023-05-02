import React, { useState } from "react";

interface Props {
  totalIncome: number;
  totalTransfers: (amount: number) => void;
}

const Balance = ({ totalIncome, totalTransfers }: Props) => {
  const [transfer, setTransfer] = useState<number>(0);

  const handleTransfer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    totalTransfers(transfer);
    setTransfer(0);
  };

  const handleTransferAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTransferAmount = parseInt(event.currentTarget.value);
    setTransfer(newTransferAmount);
  };

  return (
    <div>
      <h3>Savings</h3>
      <form onSubmit={handleTransfer}>
        <label htmlFor="balance">Current Balance: {totalIncome}</label>
        <br />
        <label htmlFor="transfer">Transfer to savings account:</label>
        <br />
        <input
          type="number"
          name="transfer"
          id="transfer"
          value={transfer}
          onChange={handleTransferAmountChange}
        />
        <br />
        <button type="submit">Transfer</button>
        <br />
      </form>
    </div>
  );
};

export default Balance;
