import React, { useState } from "react";
import "./style.css";

const Form = ({ calculateResult, plnValue }) => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("PLN");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(+amount, sourceCurrency, targetCurrency);
  };

  const options = Object.entries(plnValue).map((plnValue) => (
    <option key={plnValue[0]}>{plnValue[0]}</option>
  ));

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
            onChange={({ target }) => setSourceCurrency(target.value)}
          >
            {options}
          </select>
        </label>
        <label className="form__label">
          <span className="form__labelText">To: </span>
          <select
            className="form__select"
            value={targetCurrency}
            onChange={({ target }) => setTargetCurrency(target.value)}
          >
            {options}
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
