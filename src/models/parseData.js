const parseData = (inputData) => {
  let {
    initial_amount,
    initial_contribution,
    rate_of_return,
    duration,
    //rate_of_return_len,
    // duration_len,
    // inflation,
    // inflation_len,
    // contribution_increase,
    // contribution_increase_value,
    // contribution_inflation_increase,
  } = inputData;

  return {
    initialAmount: parseFloat(initial_amount),

    initialContribution: parseFloat(initial_contribution),

    rateOfReturn: parseFloat(rate_of_return) / 100,

    duration: parseInt(duration),

    //rateOfReturnLen: rate_of_return_len,

    // durationLen: duration_len,

    // inflation: parseFloat(inflation) / 100,

    // inflationLen: inflation_len,

    // contributionInflationIncrease: contribution_inflation_increase ? 1 : 0,

    // contributionIncrease: contribution_increase ? 1 : 0,

    // contributionIncreaseValue:
    //   contribution_increase_value === ""
    //     ? 0
    //     : parseFloat(contribution_increase_value) / 100,
  };
};

module.exports = parseData;
