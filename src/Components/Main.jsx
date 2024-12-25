import React from "react";
import Input from "./Input";
import styles from "../styles/inputGroup.module.css";


const Main = () => {
  return (
    <div className={`container w-75 ${styles['inputGroup']}  `}>
      <div className="card">
        <div className="card-body">
            <Input />
        </div>
      </div>
    </div>
  );
};

export default Main;
