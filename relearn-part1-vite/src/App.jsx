const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Liv' />
      <Hello name = 'Psilo' />
      <Hello name = 'Jahseh' />
    </div>
  )
}

export default App 