import React from "react";

export default function Timer({stage, switchStage, getTikingTime, seconds, ticking, setTicking, reset}){
    const options = ["Pomodoro", "Short Break", "Long Break"]
    return (
        <div className = "text-white w-10/12 mx-auto pt-10 flex flex-col items-center  justify-center">
            <div className ="flex gap-10 items-center">
                {options.map((option, index)=>{
                    return <h1 key={index} className = {` ${index === stage ? "bg-gray-500 bg-opacity-30 rounded-md":""} p-1 cursor-pointer transition-all`}
                    onClick = {() => switchStage(index)}>{option}</h1>
                })}
            </div>
            <div className = "mt-10 mb-10 ">
                <h1 className = "text-8xl font-bold select-none">
                    {getTikingTime()}:{seconds.toString().padStart(2, "0")}
                </h1>
            </div>
            <div>
            <button className = "px-16 py-2 text-2xl rounded-md bg-white text-sky-400 font-bold hover:bg-red-400 hover:text-white" onClick={() => setTicking((ticking) => !ticking)}>
                {ticking ? "Stop" : "Start"}
            </button>
            <button className="m-3 px-16 py-2 text-2xl rounded-md bg-white text-sky-400 font-bold hover:bg-red-400 hover:text-white" onClick={() => reset()}>Reload</button>
            </div>
            
        </div>
    )
}