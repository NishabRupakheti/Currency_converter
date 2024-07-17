import axios from "axios";
import React, { useContext, useEffect } from "react";
import CurrencyContext from "../Store/ContextProvider";

const Button = () => {
  const {
    setPrimCurrency,
    setSecCurrency,
    primCurrency,
    secCurrency,
    primaryField,
    setPrimaryField,
    secondaryField,
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
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: secCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: primCurrency,
      },
      headers: {
        "x-rapidapi-key": "73918fb350mshaf79356cbee72b9p11ee84jsn42d2f144a22d",
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const rate =
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      setSecondaryField(rate * primaryField);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={handleClick}
      >
        Convert
      </button>
      <button
        type="button"
        className="btn btn-outline-dark mx-2"
        onClick={swapHandle}
      >
        Swap
      </button>
    </div>
  );
};

export default Button;
