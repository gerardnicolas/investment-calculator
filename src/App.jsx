import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import UserInputs from './components/UserInputs';
import Info from './components/Info';

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });

  const inputIsValid = formData.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#0a0908] text-white">
        <Header />
        <UserInputs onChangeInput={handleChange} formData={formData} />
        {inputIsValid ? (
          <Table input={formData} />
        ) : (
          <p className="text-red-500 select-none mb-16">Please enter a valid duration.</p>
        )}
        <Info />
      </div>
    </>
  );
}

export default App;
