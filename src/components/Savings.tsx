import React from "react";

const Savings = () => {

    
  return (
    <div>
      <h3>Savings</h3>
      <form>
        <label htmlFor="target">Set Target:</label>
        <br />
        <input type="text" id="target" />
        <br />
        <button type="submit">Set</button>
        <br />
        <label htmlFor="current">Current:</label>
        <br />
        <label htmlFor="target">Target:</label>
        <br />
        <label htmlFor="progress">Progress:</label>
        <br />
        <progress id="file" value="32" max="100">
          32%
        </progress>
      </form>
    </div>
  );
};

export default Savings;
