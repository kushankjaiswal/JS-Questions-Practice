import logo from "./logo.svg";
import "./App.css";
import OtpComponent from "./OtpComponent";
import Stopwatch from "./StopWatch";

function App() {
  return (
    <div className="App">
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
      {/* <h2> Implement an OTP input here!</h2>
      <OtpComponent otpLength={4}/> */}
      <Stopwatch />
    </div>
  );
}

export default App;
