import React from "react";

export default function About(){
    return(
        <div className = "w-11/12 mx-auto mt-36 text-white p-5">
            <div>
                <h1 className="text-xl sm:text-2xl font-medium">
                    <span className = "border-b-4 border-red-400">What</span> is Pomodoro Techniques?</h1>
                    <p className="mt-5 tracking-wide opacity-70 text-lg">
                    The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.
                    The technique has been widely popularized by apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts.
                    </p>
            </div>
        </div>
    )
}