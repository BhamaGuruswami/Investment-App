import FormInput from "./Components/FormInput";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (investmentData) => {
    setUserInput(investmentData);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["currentSaving"];
    const yearlyContribution = userInput["yearlySaving"];
    const expectedReturn = userInput["interest"] / 100;
    const duration = userInput["investment"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />
      <FormInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investement Calculated Yet .</p>
      )}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["currentSaving"]}
        />
      )}
    </div>
  );
};

export default App;
