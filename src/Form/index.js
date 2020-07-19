import React from "react";
import "./style.css";

const FieldSet = ({ title }) => (
  <form className="form">
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
        />
      </label>
      <label className="form__label">
        <span className="form__labelText">From: </span>
        <select className="form__select">
          <option>PLN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </label>
      <label className="form__label">
        <span className="form__labelText">To: </span>
        <select className="form__select">
          <option>PLN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </label>
      <button className="form__button">Exchange</button>
    </fieldset>

  </form>
);

export default FieldSet;
