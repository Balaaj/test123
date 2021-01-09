import logo from './assets/Expertizo-logo.png';
import './App.css';
import Questions from './components/Questions';
function App() {
  return (
    <div className="App">
      <div className="App-content">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Container fluid>
          <h2>Quiz App</h2>
          <p><small>Test your Knowledge</small></p>
          <Button variant="primary">Start</Button>
        </Container> */}
        <Questions />
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
