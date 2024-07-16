import { useState } from "react";
import React from "react";

const CurrencyContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const currenciesArray = [
    "USD",
    "EUR",
    "JYP",
    "GBP",
    "CHF",
    "KWD",
    "INR",
    "NPR",
  ];

  const [primCurrency, setPrimCurrency] = useState("USD");
  const [secCurrency, setSecCurrency] = useState("EUR");
  const [primaryField, setPrimaryField] = useState("");
  const [secondaryField, setSecondaryField] = useState("");

  return (
    <CurrencyContext.Provider
      value={{
        setPrimCurrency,
        setSecCurrency,
        primCurrency,
        secCurrency,
        primaryField,
        setPrimaryField,
        secondaryField,
        setSecondaryField,
        currenciesArray,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
