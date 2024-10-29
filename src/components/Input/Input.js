import React from "react";
import styles from "./styles.module.css";
//import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const Input = ({ name, id, unit }) => {
  const {
    register,
    //  formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.input_group}>
      <span className={styles.unit}>{unit}</span>
      <input className={styles.input} type="text" id={id} {...register(name)} />
    </div>
  );
};

export default Input;
