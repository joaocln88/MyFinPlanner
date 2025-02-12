import * as yup from "yup";

export const schema = yup.object({
  initialAmount: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .required("Campo necessário")
    .typeError("Valor ou formato inválido"),
  initialContribution: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .required("Campo necessário")
    .typeError("Valor ou formato inválido"),
  rateOfReturn: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .required("Campo necessário")
    .min(0, "Valor ou formato inválido")
    .typeError("Valor ou formato inválido"),
  duration: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .required("Campo necessário")
    .positive("Valor ou formato inválido")
    .integer("Valor ou formato inválido")
    .typeError("Valor ou formato inválido"),
  updateTotalAmountByInflation: yup.boolean().default(false),
  updateContributionByInflation: yup.boolean().default(false),
  updateContributionByRateOfIncrease: yup.boolean().default(false),
  inflation: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .nullable()
    .min(0, "Valor ou formato inválido")
    .typeError("Valor ou formato inválido"),
  contributionRateOfIncrease: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value,
    )
    .nullable()
    .min(0, "Valor ou formato inválido")
    .typeError("Valor ou formato inválido"),
});
