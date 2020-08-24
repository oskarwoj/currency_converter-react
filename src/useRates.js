import { useState, useEffect } from "react";
import axios from "axios";

export const useRates = () => {
  const [ratesValue, setRatesValue] = useState(null);
  const [date, setDate] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      await axios
        .get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then((response) => {
          const rates = response.data.rates;
          const date = response.data.date;
          setDate(date);
          setRatesValue(rates);
        })
        .catch(() => {
          setIsError(true);
        });
    };
    setTimeout(() => {
      fetchRates();
    }, 1000);
  }, []);

  return {
    ratesValue,
    date,
    isError,
  };
};
