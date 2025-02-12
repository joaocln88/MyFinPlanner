import { addMonths, format } from "date-fns";

export const createData = (inputData) => {
  const { initialAmount, duration, initialContribution, rateOfReturn } =
    inputData;

  const data = [];
  let contribution = initialContribution;
  let accumulatedContribution = initialAmount;
  let totalAccumulated = initialAmount;
  let accumulatedInterest = 0;

  //Duration available only in years for the user
  const durationInMonths = 12 * duration;

  // Loop through each month to calculate the data
  for (let i = 1; i <= durationInMonths; i++) {
    const item = calculateMonthlyData(
      i,
      contribution,
      accumulatedContribution,
      totalAccumulated,
      rateOfReturn,
      accumulatedInterest,
    );
    data.push(item);

    contribution = item.contribution;
    accumulatedContribution = item.accumulated_contribution;
    totalAccumulated = item.total_accumulated;
    accumulatedInterest = item.accumulated_interest;
  }

  return data;
};

//Function to calculate monthly data
function calculateMonthlyData(
  monthID,
  contribution,
  accumulatedContribution,
  totalAccumulated,
  rateOfReturn,
  accumulatedInterest,
) {
  const newContribution = getContribution(monthID, contribution);
  const newAccumulatedContribution = getAccumulatedValue(
    newContribution,
    accumulatedContribution,
  );
  const [monthlyInterest, newTotalAccumulated] = getTotalAccumulated(
    totalAccumulated,
    rateOfReturn,
    newContribution,
  );
  const newAccumulatedInterest = getAccumulatedValue(
    monthlyInterest,
    accumulatedInterest,
  );

  return {
    monthID: monthID,
    month: getMonth(monthID),
    contribution: newContribution,
    accumulated_contribution: newAccumulatedContribution,
    monthlyInterest: monthlyInterest,
    accumulated_interest: newAccumulatedInterest,
    total_accumulated: newTotalAccumulated,
  };
}

function getMonth(monthID) {
  const today = new Date();
  return format(addMonths(today, monthID), "MMM-yyyy");
}

function getYear(monthID) {
  const year =
    monthID % 12 !== 0
      ? Math.floor(monthID / 12)
      : Math.floor(monthID / 12) - 1;
  return year;
}

function getContribution(monthID, contribution, contribuitionIncrease = 0) {
  if (contribuitionIncrease === 0) return contribution;

  const year = getYear(monthID);
  /*contribution *
          (1 +
            contributionInflationIncrease * inflation +
            contributionIncrease * contributionIncreaseValue) **
            year */
  return contribution * (1 + contribuitionIncrease) ** year;
}

function getAccumulatedValue(
  currentContribution,
  previousAccumulatedContribution,
) {
  return currentContribution + previousAccumulatedContribution;
}

function getTotalAccumulated(prevAccumulated, rateOfReturn, contribuition) {
  const monthlyRateOfReturn = (1 + rateOfReturn) ** (1 / 12) - 1;
  const monthlyInterest = prevAccumulated * monthlyRateOfReturn;
  const totalAccumulated = prevAccumulated + monthlyInterest + contribuition;
  return [monthlyInterest, totalAccumulated];
}
