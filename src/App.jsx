import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from "./components/Results.jsx";
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));

  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} ></UserInput>
      {!inputIsValid && <p className='center'>Please enter a valid duration (at least 1 year).</p>}
      {inputIsValid && <Results userInput={userInput}></Results>}
    </>
  );
}

export default App;
