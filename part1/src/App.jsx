import { useState } from "react";

const Button = ({onClick, text}) => {
  return (
    <button
    onClick={onClick}
    >{text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text}{value}</p>
  )
}

const Statistics = ({good, bad, total, neutral}) => {
  let sum = good - bad;
  let avg = sum / total;
  let positivePercent = (good / total) * 100;

  if (good == 0 && bad == 0 && neutral == 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <StatisticsLine text="Good: " value={good} />
        <StatisticsLine text="Neutral: " value={neutral} />
        <StatisticsLine text="Bad: " value={bad} />
        <StatisticsLine text="Total: " value={total} />
        <StatisticsLine text="Average: " value={avg} />
        <StatisticsLine text="Positive Percentage: " value={positivePercent} />
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} total={total} neutral={neutral} />
    </div>
  )
}

export default App