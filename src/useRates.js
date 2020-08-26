import { useState, useEffect } from "react";
import axios from "axios";

export const useRates = () => {
  const [data, setData] = useState({
    rates: "",
    date: "",
    isError: false,
  });

  useEffect(() => {
    const fetchRates = async () => {
      await axios
        .get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then((response) => {
          const ratesAPI = response.data.rates;
          const dateAPI = response.data.date;
          setData({ rates: ratesAPI, date: dateAPI, isError: false });
        })
        .catch(() => {
          setData({ isError: true });
        });
    };
    setTimeout(fetchRates, 1000);
  }, []);

  return data;
};
