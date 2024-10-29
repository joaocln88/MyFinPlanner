import React from "react";
import FormLineAdvanced from "../FormLineAdvanced/FormLineAdvanced";

const FormAdvanced = ({ formFields }) => {
  return (
    <div>
      {formFields.map((formField) => (
        <FormLineAdvanced key={formField} fields={formField} />
      ))}
    </div>
  );
};
export default FormAdvanced;
