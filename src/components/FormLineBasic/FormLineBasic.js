import React from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";

import styles from "./styles.module.css";
import Select from "../Select/Select";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const FormLineBasic = ({ fields }) => {
  const {
    //register,
    formState: { errors },
  } = useFormContext();

  const labelId = fields.input ? fields.input.id : fields.select.id;
  return (
    <>
      <div className={styles.formLine}>
        <Label id={labelId}>{fields.label}</Label>
        {fields.input && (
          <Input
            id={fields.input.id}
            name={fields.input.name}
            unit={fields.input.unit}
          />
        )}
        {fields.select && (
          <Select
            name={fields.select.name}
            id={fields.select.id}
            options={fields.select.options}
            optionsText={fields.select.optionsText}
          />
        )}
        <ErrorMessage
          errors={errors}
          name={fields.input.name}
          render={({ message }) => (
            <p className={styles.errorLine}>{message}</p>
          )}
        />
      </div>
    </>
  );
};

export default FormLineBasic;
