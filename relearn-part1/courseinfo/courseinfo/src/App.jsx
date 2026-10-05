import {useState} from 'react';

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick = {props.onClick} >
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10);

  const SetToValue = newValue => {
    console.log('value now', newValue);
    setValue(newValue);
  }

  return (
    <div>
      <Display value = {value} />
      <Button onClick = {() => SetToValue(1000)} text = "thousand" />
      <Button onClick = {() => SetToValue(0)} text = "reset" />
      <Button onClick = {() => SetToValue(value + 1)} text = "increment" />
    </div>
  )
}

export default App;