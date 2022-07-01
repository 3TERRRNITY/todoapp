/*45:08*/
import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
import About from "../components/About";
import Todos from "../components/Todos";

export default function Index(){
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreaks, setShortBreaks] = useState(5);
  const [longBreaks, setLongBreaks] = useState(10);
  const [second, setSecond] = useState(0)
  const [stage,setStage] = useState(0)
  const [ticking, setTicking] = useState(false);
  const [consumedSecond, setConsumedSecond] = useState(0);


  const switchStage = (index) => {
    const isYes = consumedSecond && stage !== index ? confirm("Точно хочешь сделать это?"): false;
    if(isYes){
      reset();
      setStage(index)
    } else if(!consumedSecond){
      reset();
    } 
    
  }
  const getTikingTime = () =>{
    const timeStage = {
      0:pomodoro,
      1:shortBreaks,
      2:longBreaks,
    };
    return timeStage[stage];
  }

  const updateMinute = () => {
    const updateStage = {
      0:setPomodoro,
      1:setShortBreaks,
      2:setLongBreaks,
    };
    return updateStage[stage];
  }
  const reset = () => {
    setConsumedSecond(0);
    setTicking(false);
    setSecond(0);
    setPomodoro(25);
    setLongBreaks(10);
    setShortBreaks(5);
  }
  const clockTicking = () => {
    const minutes = getTikingTime();
    const setMinutes = updateMinute();

    if(minutes === 0 && second == 0) {
      reset();
      alert("Время вышло!")
    } else if(second === 0){
      setMinutes((minute) => minute-1)
      setSecond(59)
    }else{
      setSecond((second) => second-1)
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value+1)
        clockTicking()
      }
      
    },1000)
    return () => {
      clearInterval(timer);
    }
  }, [second, pomodoro, shortBreaks, longBreaks, ticking])


  return (
    <div className="bg-sky-500 min-h-screen font-mono">
      <div className = "max-w-2xl min-h-screen mx-auto">
        <Navigation />
        <Timer stage = {stage} switchStage = {switchStage} getTikingTime={getTikingTime} seconds ={second} ticking={ticking} setTicking = {setTicking} reset = {reset}/>
        <Todos />
        <About />
      </div>
    </div>
  )
}
