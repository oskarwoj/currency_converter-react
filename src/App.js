/* eslint-disable default-case */
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

const App = () => {
  const [result, setResult] = useState("");

  const plnValue = {
    PLN: 1,
    USD: 3.92,
    EUR: 4.399,
  };

  const calculateResult = (amount, sourceCurrency, targetCurrency) => {
    const resultValue =
      (amount * plnValue[sourceCurrency]) / plnValue[targetCurrency];
    setResult(`${resultValue.toFixed(2)} ${targetCurrency}`);
  };
  return (
    <FormContainer>
      <Header />
      <Form calculateResult={calculateResult} plnValue={plnValue} />
      <Result result={result} />
    </FormContainer>
  );
};

export default App;
