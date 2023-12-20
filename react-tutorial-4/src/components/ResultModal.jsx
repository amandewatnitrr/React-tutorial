import React, {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime},ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <center><h2>You {result}</h2>
            <p>The Target time was {targetTime}s.</p>
            <p>You stopped the time with <strong>X</strong> seconds left.</p>
            <form method="dialog">
                <center><button type="submit">Close</button></center>
            </form>
            </center>
        </dialog>
    );
})

export default ResultModal;
