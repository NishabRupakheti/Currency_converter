import React from "react";
import Input from "./Input";
import styles from "../styles/inputGroup.module.css";

const Main = () => {
  return (
    <div className={`container-fluid ${styles.inputGroup}`}>
      <Input />
    </div>
  );
};

export default Main;
