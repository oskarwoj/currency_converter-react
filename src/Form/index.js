import React, { useState } from "react";
import "./style.css";

const Form = ({ calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setsourceCurrency] = useState("");
  const [targetCurrency, settargetCurrency] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(+amount, sourceCurrency, targetCurrency);
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="from__fieldset">
        <legend className="form__legend">Converter</legend>
        <label className="form__label">
          <span className="form__labelText">Amount: </span>
          <input
            className="form__select"
            required
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </label>
        <label className="form__label">
          <span className="form__labelText">From: </span>
          <select
            className="form__select"
            value={sourceCurrency}
            onChange={({ target }) => setsourceCurrency(target.value)}
          >
            <option></option>
            <option>PLN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
        <label className="form__label">
          <span className="form__labelText">To: </span>
          <select
            className="form__select"
            value={targetCurrency}
            onChange={({ target }) => settargetCurrency(target.value)}
          >
            <option></option>
            <option>PLN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
        <label className="form__label">
          <button className="form__button">Exchange</button>
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
