/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormContainer from "./FormContainer";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const [result, setResult] = useState("");
  const [plnValue, setPlnValue] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      await axios
        .get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then((response) => {
          const rates = response.data.rates;

          setPlnValue(rates);
        })
        .catch(() => {
          console.log("error, please check your code");
        });
    };
    fetchRates();
  }, []);

  const calculateResult = (amount, sourceCurrency, targetCurrency) => {
    const resultValue =
      (amount * plnValue[targetCurrency]) / plnValue[sourceCurrency];
    setResult(`${resultValue.toFixed(2)} ${targetCurrency}`);
  };
  return (
    <FormContainer>
      <GlobalStyle />
      <Header />
      <Form calculateResult={calculateResult} plnValue={plnValue} />
      <Result result={result} />
      <Clock />
    </FormContainer>
  );
};

export default App;
