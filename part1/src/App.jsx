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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
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

  const handleAnectdote = () => {
    let ranNum = Math.floor(Math.random() * 8);
    setSelected(ranNum);
    return (
      <p>{anecdotes[selected]}</p>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} all={all} neutral={neutral} />
      <p>{anecdotes[selected]}</p>
      <Button onClick={handleAnectdote} text="Click for next anecdote" />
    </div>
  )
}

export default App