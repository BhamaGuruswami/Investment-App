import React, { useState } from "react";

const FormInput = (props) => {
  const [currentSaving, setCurrentSaving] = useState(10000);
  const [yearlySaving, setYearlySaving] = useState(1200);
  const [interest, setInterest] = useState(7);
  const [investment, setInvestment] = useState(10);

  const onChangeCurrentSaving = (event) => {
    // console.log(event.target.value);
    setCurrentSaving(event.target.value);
  };

  const onChangeyearlySaving = (event) => {
    // console.log(event.target.value);
    setYearlySaving(event.target.value);
  };

  const onChangeInterest = (event) => {
    setInterest(event.target.value);
  };

  const onChangeInvestment = (event) => {
    // console.log(event.target.value);
    setInvestment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const investmentData = {
      currentSaving: +currentSaving,
      yearlySaving: +yearlySaving,
      interest: +interest,
      investment: +investment,
    };
    console.log(investmentData);
    setCurrentSaving("");
    setYearlySaving("");
    setInterest("");
    setInvestment("");

    props.onCalculate(investmentData);
  };

  const restHandler = () => {
    setCurrentSaving("");
    setYearlySaving("");
    setInterest("");
    setInvestment("");
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={currentSaving}
              onChange={onChangeCurrentSaving}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlySaving}
              onChange={onChangeyearlySaving}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={interest}
              onChange={onChangeInterest}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={onChangeInvestment}
              value={investment}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={restHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default FormInput;
