import { useContext } from "react";
import React from "react";
import Button from "./Button";
import CurrencyContext from "../Store/ContextProvider";
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
          <select
            className={styles.currencySelect}
            value={primCurrency}
            onChange={(e) => setPrimCurrency(e.target.value)}
          >
            {currenciesArray.map((curr, index) => (
              <option key={index} value={curr}>
                {curr}
              </option>
            ))}
          </select>
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
          <select
            className={styles.currencySelect}
            value={secCurrency}
            onChange={(e) => setSecCurrency(e.target.value)}
          >
            {currenciesArray.map((curr, index) => (
              <option key={index} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button />
    </>
  );
};

export default Input;
