import React, {forwardRef, useImperativeHandle, useRef} from "react";
import  { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset},ref) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100);

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <center>
        <dialog ref={dialog} className="result-modal">
            { userLost && <h2>You Lost</h2>}
            { !userLost && <h2>Your Score: {score}</h2>}
            <p>The Target time was {targetTime}s.</p>
            <p>You stopped the time with <strong>{formattedTime}</strong> seconds left.</p>
            <form method="dialog" onSubmit={onReset}>
                <center><button type="submit">Close</button></center>
            </form>
        </dialog>
        </center>,
        document.getElementById('modal') // Example of portal usage in the website.
    );
})

export default ResultModal;
