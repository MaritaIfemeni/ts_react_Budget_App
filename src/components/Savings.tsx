import React from "react";

const Savings = () => {
  return (
    <div>
      <h3>Savings</h3>
      <form>
        <label htmlFor="target">Set Target:</label>
        <br></br>
        <input type="text" id="target" />
        <br></br>
        <button type="submit">Set</button>
        <br></br>
        <label htmlFor="current">Current:</label>
        <br></br>
        <label htmlFor="target">Target:</label>
        <br></br>
        <label htmlFor="progress">Progress:</label>
        <br></br>
        <progress id="file" value="32" max="100">
          32%
        </progress>
      </form>
    </div>
  );
};

export default Savings;
