import { useContext } from "react";
import React from "react";
import Button from "./Button";
import CurrencyContext from "../Store/ContextProvider";

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
      <div className={`input-group mb-3 p-3`}>
        <input
          value={primaryField}
          onChange={(e) => setPrimaryField(e.target.value)}
          type="number"
          className="form-control"
          placeholder={`Enter ${primCurrency}`}
          aria-label="Amount"
        />
        <div className="input-group-append">
          <select
            className="form-select mx-1"
            id="inputGroupSelect01"
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
      <div className="input-group mb-3 p-3 rounded rounded-4 ">
        <input
          value={secondaryField}
          disabled
          type="number"
          className="form-control"
          placeholder="Secondary currency"
          aria-label="Amount"
        />
        <div className="input-group-append">
          <select
            className="form-select rounded rounded-2 mx-1 "
            id="inputGroupSelect02"
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
