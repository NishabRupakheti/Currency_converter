import React, { useState } from 'react';
import styles from '../styles/CurrencyDropdown.module.css';

const CurrencyDropdown = ({ value, onChange, currencies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency) => {
    onChange(currency);
    setIsOpen(false);
  };

  return (
    <div 
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.selectedValue}>
        {value}
        <span className={styles.arrow}>▼</span>
      </div>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {currencies.map((curr, index) => (
            <div
              key={index}
              className={`${styles.dropdownItem} ${curr === value ? styles.active : ''}`}
              onClick={() => handleSelect(curr)}
            >
              {curr}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
