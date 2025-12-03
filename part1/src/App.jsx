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
    <table style={{width: "150px"}}>
      <tbody>
        <tr>
          <th style={{textAlign: "left"}} >{text}</th>
          <td style={{textAlign: "right"}}>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good, bad, all, neutral}) => {
  let sum = good - bad;
  let avg = sum / all;
  let positivePercent = (good / all) * 100;

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
        <StatisticsLine text="All: " value={all} />
        <StatisticsLine text="Average: " value={avg} />
        <StatisticsLine text="Positive: " value={positivePercent} />
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} all={all} neutral={neutral} />
    </div>
  )
}

export default App