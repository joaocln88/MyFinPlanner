import React from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";

import styles from "./styles.module.css";
import Checkbox from "../Checkbox/Checkbox";

const FormLineAdvanced = ({ fields }) => {
  const labelId = fields.input ? fields.input.id : fields.checkbox.id;
  return (
    <div className={styles.formLine}>
      <Checkbox name={fields.checkbox.name} />
      <Label id={labelId}>{fields.label}</Label>
      {fields.input && <Input id={fields.input.id} name={fields.input.name} />}
    </div>
  );
};

export default FormLineAdvanced;
