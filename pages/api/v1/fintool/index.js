import { createData } from "src/models/createData";

export default async function fintool(request, response) {
  const input_data = {
    initialAmount: 85000,
    initialContribution: 5000,
    rateOfReturn: 0.12,
    duration: 5,
    // contribution_increase: false,
    // contribution_increase_value: 0,
    // contribution_inflation_increase: false,
    // duration_len: "y",
    // inflation: 0,
    // inflation_len: "y",
    // rate_of_return_len: "y",
  };

  const data = createData(input_data);
  response.status(200).json(data);
}
