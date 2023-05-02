import React from "react";

const Balance = () => {
  return (
    <div>
      <h3>Savings</h3>
      <form>
        <label htmlFor="balance">Current Balance:</label>
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
