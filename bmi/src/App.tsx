import React from 'react';

function App() {
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);
  const [bmi, setBmi] = React.useState<number|string>(0);

  const highChange = (e: any) => {
    setHeight(parseInt(e.target.value));
  };

  const weighChange = (e: any) => {
    setWeight(parseInt(e.target.value));
  };

  const bi = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    let bmiCategory;
    if (bmiValue <= 16) {
      bmiCategory = "Severe Thinness";
    } else if (bmiValue > 16 && bmiValue < 25) {
      bmiCategory = "Normal";
    } else {
      bmiCategory = "Overweight";
    }
    setBmi(`${bmiValue.toFixed(2)} - ${bmiCategory}`);
  };

  return (
    <>
      <div className="border-2 border-black bg-slate-400">
        <span className="ml-5 mr-5 mt-5 text-black">
          Height(cm): <input type="text" onChange={highChange} className="border-2 border-black"/>
        </span>
        <span className="ml-5 mr-5 mt-5 text-black">
          Weight(kg): <input type="text" onChange={weighChange} className="border-2 border-black"/>
        </span>
        <button className="mt-5 border-2 border-black box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-black px-2" onClick={bi}>
          Check BMI
        </button>
        <h1 className="text-black">BMI: {bmi}</h1>
      </div>
    </>
  );
}

export default App;
