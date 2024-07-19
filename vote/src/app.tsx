import React, {useState} from "react"
export function App() {
    const [age, setAge] = React.useState<number>(0)
    const [vote, setVote] =React.useState<string>()
    const ageChange = (e: any) => {
        setAge(parseInt(e.target.value))
    }

    const vot = () => {
        if(age >=  18){
            setVote("You are eligible to vote");
        }
        else {
            setVote("You are not eligible to vote");
        }
    }

    return (
        <>
        
        <div className="flex flex-row justify-center items-center">
                <span className="ml-5 mr-5 mt-5 text-black">
                    Age: <input type="text" onChange={ageChange} className="border-2 border-black" />
                </span>
            </div>
            <button className="mt-5 border-2 border-black box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-black px-2" onClick={vot}>
                Check Eligibility
            </button>
            <br />
            <h1 className="text-black">Voting Eligibility: {vote}</h1>
          
        </>
    )
}