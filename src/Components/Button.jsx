import axios from "axios";
import React, { useContext, useEffect } from "react";
import CurrencyContext from "../Store/ContextProvider";
import styles from "../styles/inputGroup.module.css";

const Button = () => {
  const {
    setPrimCurrency,
    setSecCurrency,
    primCurrency,
    secCurrency,
    primaryField,
    setPrimaryField,
    setSecondaryField,
  } = useContext(CurrencyContext);

  const swapHandle = () => {
    setPrimCurrency((prevPrimCurrency) => {
      setSecCurrency(prevPrimCurrency);
      return secCurrency;
    });

    setPrimaryField("");
    setSecondaryField("");
  };

  useEffect(() => {
    if (primaryField == "") {
      setSecondaryField("");
    }
  }, [primaryField]);

  const handleClick = async () => {
    const options = {
      method: "GET",
      url: `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${primCurrency}`,
    };

    try {
      const response = await axios.request(options);
      setSecondaryField(
        (response.data["conversion_rates"][secCurrency] * primaryField).toFixed(
          2
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        className={styles.primaryButton}
        onClick={handleClick}
      >
        Convert 🔄
      </button>
      <button
        type="button"
        className={styles.secondaryButton}
        onClick={swapHandle}
      >
        Swap 🔄
      </button>
    </div>
  );
};

export default Button;
