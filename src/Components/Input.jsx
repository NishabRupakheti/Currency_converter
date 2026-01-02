import { useContext } from "react";
import React from "react";
import Button from "./Button";
import CurrencyContext from "../Store/ContextProvider";
import CurrencyDropdown from "./CurrencyDropdown";
import styles from "../styles/inputGroup.module.css";

const Input = () => {
  const {
    primaryField,
    currenciesArray,
    setPrimaryField,
    secondaryField,
    primCurrency,
    secCurrency,
    setSecCurrency,
    setPrimCurrency,
  } = useContext(CurrencyContext);

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            value={primaryField}
            onChange={(e) => setPrimaryField(e.target.value)}
            type="number"
            className={styles.currencyInput}
            placeholder={`Enter amount in ${primCurrency}`}
          />
          <CurrencyDropdown
            value={primCurrency}
            onChange={setPrimCurrency}
            currencies={currenciesArray}
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            value={secondaryField}
            disabled
            type="number"
            className={styles.currencyInput}
            placeholder={`Amount in ${secCurrency}`}
            style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          />
          <CurrencyDropdown
            value={secCurrency}
            onChange={setSecCurrency}
            currencies={currenciesArray}
          />
        </div>
      </div>

      <Button />
    </>
  );
};

export default Input;
