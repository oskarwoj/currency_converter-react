import React, { useState } from "react";

import { Label, Select, Input, Button } from "./styled";

const Form = ({ calculateResult, plnValue }) => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(+amount, sourceCurrency, targetCurrency);
  };

  const options = Object.entries(plnValue).map((plnValue) => (
    <option key={plnValue[0]}>{plnValue[0]}</option>
  ));

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset>
        <legend>Converter</legend>
        <Label>
          <span>Amount: </span>
          <Input
            required
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </Label>
        <Label>
          <span>From: </span>
          <Select
            value={sourceCurrency}
            onChange={({ target }) => setSourceCurrency(target.value)}
          >
            {options}
          </Select>
        </Label>
        <Label>
          <span>To: </span>
          <Select
            value={targetCurrency}
            onChange={({ target }) => setTargetCurrency(target.value)}
          >
            {options}
          </Select>
        </Label>
        <Label>
          <Button>Exchange</Button>
        </Label>
      </fieldset>
    </form>
  );
};

export default Form;
