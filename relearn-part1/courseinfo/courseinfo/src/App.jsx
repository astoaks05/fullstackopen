import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <div>
      <h1>
        Counter: {counter}
      </h1>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick = {onClick} >
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter = {counter} />
      <Button onClick = {increaseByOne} text = 'Increment' />
      <Button onClick = {decreaseByOne} text = 'Decrement' />
      <Button onClick = {setToZero} text = 'Zero' />
    </div>
  )
}

export default App;