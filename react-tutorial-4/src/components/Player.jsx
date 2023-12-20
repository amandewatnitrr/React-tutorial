import React, { useState, useRef } from 'react';

/*
* Ref in REACT is a value just as state in the end is a value, and just as a variable contains a value, but a special
* kind of value. It's managed by react in a special way precisely.
*
* useState causes complete component re-evaluation when changed. And, hence useState should be used for the values that
* are directly reflected in the UI.
*
* useState should not be used for values that are only used behind the scenes, and have no direct impact on the UI.
*
* useRef donot cause component re-evaluation when changed. The component will not be re-evaluated when the value of the
* ref changes. And, hence useRef should be used for the values that are not directly reflected in the UI.
*
* Refs can be used to get direct DOM element access. It's great for reading values or accessing certain browser APIs.
 */

function Player() {
    const playerName = useRef("");
    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    const [inputBackgroundColor, setInputBackgroundColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleButtonClick = () => {
        if (playerName.current.value === '') {
            setAlertMessage('Please enter a valid player name.');
            setInputBackgroundColor('#21111e');
        } else {
            setEnteredPlayerName(playerName.current.value);
            setInputBackgroundColor('');
            setAlertMessage('');
        }
    };

    return (
        <section id="player">
            {enteredPlayerName ? (
                <h2>Welcome {enteredPlayerName}!</h2>
            ) : (
                <>
                    <h2>Welcome _______</h2>
                    <p className="input-container">
                        <input
                            ref={playerName}
                            type="text"
                            placeholder="Enter player name"
                            style={{backgroundColor: inputBackgroundColor}}
                        />
                        <button onClick={handleButtonClick}>Set Name</button>
                    </p>
                </>
            )}
            {alertMessage && <p className="alert-message">{alertMessage}</p>}
        </section>
    );
}

export default Player;

/*

This is how we normally would implement the Player component.

const Player = () => {
 const [playerName, setPlayerName] = useState('');
 const [enteredPlayerName, setEnteredPlayerName] = useState('');
 const [inputBackgroundColor, setInputBackgroundColor] = useState('');
 const [alertMessage, setAlertMessage] = useState('');

 const handleButtonClick = () => {
    if (enteredPlayerName === '') {
      setAlertMessage('Please enter a valid player name.');
      setInputBackgroundColor('#21111e');
    } else {
      setPlayerName(enteredPlayerName);
      setEnteredPlayerName('');
      setInputBackgroundColor('');
      setAlertMessage('');
    }
 };

 return (
    <section id="player">
      {playerName ? (
        <h2>Welcome {playerName}!</h2>
      ) : (
        <>
          <h2>Welcome {playerName || 'unknown entity'}</h2>
          <p className="input-container">
            <input
              type="text"
              placeholder="Enter player name"
              value={enteredPlayerName}
              onChange={(e) => setEnteredPlayerName(e.target.value)}
              style={{ backgroundColor: inputBackgroundColor }}
            />
            <button onClick={handleButtonClick}>Set Name</button>
          </p>
        </>
      )}
      {alertMessage && <p className="alert-message">{alertMessage}</p>}
    </section>
 );
};

export default Player;

 */