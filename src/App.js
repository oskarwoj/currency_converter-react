/* eslint-disable default-case */
import React, { useState } from "react";
import { useRates } from "./useRates";
import FormContainer from "./FormContainer";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const { date, ratesValue, isError } = useRates();
  const [result, setResult] = useState("");

  const calculateResult = (amount, sourceCurrency, targetCurrency) => {
    const resultValue =
      (amount * ratesValue[targetCurrency]) / ratesValue[sourceCurrency];
    setResult(`${resultValue.toFixed(2)} ${targetCurrency}`);
  };
  return (
    <FormContainer>
      <GlobalStyle />
      <Clock />
      <Header />
      {ratesValue ? (
        <>
          <Form calculateResult={calculateResult} plnValue={ratesValue} />
          <Result result={result} />
          <p>
            Currency exchange rates updated on: <strong>{date}</strong>
          </p>
        </>
      ) : !isError ? (
        "Loading..."
      ) : (
        "Error, please try again later"
      )}
    </FormContainer>
  );
};

export default App;
