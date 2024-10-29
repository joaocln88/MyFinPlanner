import React from "react";

import FormLineBasic from "../FormLineBasic/FormLineBasic";

const FormBasic = ({ formFields }) => {
  return (
    <>
      {formFields.map((formField) => (
        //  <div>
        <FormLineBasic key={formField} fields={formField} />
        //  </div>
      ))}
    </>
  );
};

export default FormBasic;
