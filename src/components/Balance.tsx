import React from "react";


type Props = {
    totalIncome: number;
}


const Balance: React.FC<Props> = (props) => {
    const totalIncome = props.totalIncome;

  return (
    <div>
      <h3>Savings</h3>
      <form>
        <label htmlFor="balance">Current Balance: {totalIncome} </label>
        <br></br>
        <label htmlFor="transfer">Transfer to savings account:</label>
        <br></br>
        <input type="text" id="transfer-savings" />
        <br></br>
        <button type="submit">Transfer</button>
        <br></br>
      </form>

    </div>
  );
};

export default Balance;
