const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Olivia';
  const age = 20;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age} />
      <Hello name = 'Psilo' age = {12+5}/>
      <Hello name = 'Jahseh' age = {29} />
    </div>
  )
}

export default App 