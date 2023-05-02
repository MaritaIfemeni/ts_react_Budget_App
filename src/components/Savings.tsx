import React, { useState, useEffect } from "react";

interface Props {
  totalIncome: number;
}

const Savings = ({ totalIncome }: Props) => {
  const [target, setTarget] = useState<number>();
  const [current, setCurrent] = useState<number>();

  useEffect(() => {
    if (target) {
      const barPercent = (totalIncome / target) * 100;
      setCurrent(barPercent);
    }
  }, [target, totalIncome]);

  const modifiedTarget = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const targetValue = parseInt(e.currentTarget.target.valueOf());
    setTarget(targetValue);
  };

  return (
    <div>
      <h3>Savings</h3>
      <form onSubmit={modifiedTarget}>
        <label htmlFor="target">Set Target:</label>
        <br />
        <input type="text" id="target" />
        <br />
        <button type="submit">Set</button>
        <br />
        <label htmlFor="current">Current: {totalIncome}</label>
        <br />
        <label htmlFor="target">Target: {target} </label>
        <br />
        <label htmlFor="progress">
          Progress: {current ? current.toFixed(0) : "-"}%{" "}
        </label>
        <br />
        <progress id="file" value={totalIncome} max={target}></progress>
      </form>
    </div>
  );
};
export default Savings;
