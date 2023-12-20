import React, { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

function TimerGame({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerIsActive, setTimerIsActive] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    useEffect(() => {
        if (timeRemaining <= 0) {
            setTimerExpired(true);
            setTimerIsActive(false); // Add this line to reset timerIsActive
            clearInterval(timer.current);
            setTimeRemaining(targetTime * 1000);
            dialog.current.open();
        }
    }, [timeRemaining, targetTime]);

    function handleStart() {
        setTimerIsActive(true);
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
            if (timeRemaining <= 0) {
                setTimerIsActive(false);
                setTimerExpired(true);
                clearInterval(timer.current);
                setTimeRemaining(targetTime * 1000);
                dialog.current.open();
            }
        }, 10);
    }

    function handleStop() {
        setTimerIsActive(false);
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleDialogClose() {
        setTimerIsActive(false); // Reset timerIsActive when the dialog is closed
    }

    return (
        <>
            <ResultModal ref={dialog} result="Lost" targetTime={targetTime} onClose={handleDialogClose} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className="">
                    {timerIsActive ? "Timer's running ..." : "Timer Stopped !!!"}
                </p>
            </section>
        </>
    );
}

export default TimerGame;
