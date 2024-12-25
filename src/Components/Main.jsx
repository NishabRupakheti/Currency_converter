import React from "react";
import Input from "./Input";
import styles from "../styles/inputGroup.module.css";


const Main = () => {
  return (
    <div className={`container-fluid w-sm-100 w-md-75 w-lg-50 ${styles['inputGroup']}`}>
      <div className="card">
        <div className="card-body">
            <Input />
        </div>
      </div>
    </div>
  );
};

export default Main;
