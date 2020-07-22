/* eslint-disable default-case */
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

const App = () => {
  const [result, setResult] = useState("");
  const calculateResult = (amount, sourceCurrency, targetCurrency) => {
    let plnValue, finalAmount;

    const rates = {
      usd: 3.8922,
      eur: 4.399,
    };

    const { usd, eur } = rates;

    switch (sourceCurrency) {
      case "PLN":
        plnValue = +amount;
        break;

      case "USD":
        plnValue = amount * usd;
        break;
      case "EUR":
        plnValue = amount * eur;
        break;
    }

    switch (targetCurrency) {
      case "PLN":
        finalAmount = plnValue;
        break;
      case "USD":
        finalAmount = plnValue / usd;
        break;
      case "EUR":
        finalAmount = plnValue / eur;
        break;
    }
    setResult(`${finalAmount.toFixed(2)} ${targetCurrency}`);
  };
  return (
    <FormContainer>
      <Header />
      <Form calculateResult={calculateResult} />
      <Result result={result} />
    </FormContainer>
  );
};

export default App;
