import React from "react";

function App() {
  const [balance, setBalance] = React.useState<number>(0);
  const [gender, setGender] = React.useState<string>("");
  const [discount, setDiscount] = React.useState<number>(0);

  const BalanceChange = (e: any) => {
    const newBalance = parseInt(e.target.value);
    setBalance(newBalance);
    applyDiscount(newBalance, gender);
  };

  const GenderChange = (e: any) => {
    const newGender = e.target.value;
    setGender(newGender);
    applyDiscount(balance, newGender);
  };

  const applyDiscount = (balance: number, gender: string) => {
    if (gender === "female") {
      setDiscount(balance * 0.70);
    } else {
      setDiscount(balance * 0.30);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <span className="ml-5 mr-5 mt-5 text-black">
          Balance: <input type="text" onChange={BalanceChange} className="border-2 border-black" />
        </span>
        <span className="ml-5 mr-5 mt-5 text-black">
          Gender: 
          <select onChange={GenderChange} className="border-2 border-black">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </span>
      </div>
      <div className="mt-5">
        <h1 className="text-black">Original Balance: {balance}</h1>
        <h1 className="text-black">Discount: {discount}</h1>
        <h1 className="text-black">Final Balance: {balance - discount}</h1>
      </div>
    </>
  );
}

export default App;
