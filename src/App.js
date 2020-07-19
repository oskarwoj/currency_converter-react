/* eslint-disable default-case */
import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Main from "./Main";
import Result from "./Result";

const App = () => {
  const [result, setResult] = useState("");
  const calculateResult = (amount, firstCurrencyName, secondCurrencyName) => {
    let plnValue = "";
    let expectedAmount = "";
    const rates = {
      usd: 3.8922,
      eur: 4.399,
    };

    const { usd, eur } = rates;

    switch (firstCurrencyName) {
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

    switch (secondCurrencyName) {
      case "PLN":
        expectedAmount = plnValue;
        break;
      case "USD":
        expectedAmount = plnValue / usd;
        break;
      case "EUR":
        expectedAmount = plnValue / eur;
        break;
    }
    setResult(expectedAmount);
  };
  return (
    <>
      <Main>
        <Header />
        <FormContainer>
          <Form calculateResult={calculateResult} />
          <Result result={result} />
        </FormContainer>
      </Main>
    </>
  );
};

export default App;
