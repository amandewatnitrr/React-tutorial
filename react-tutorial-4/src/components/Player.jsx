import React, { useState } from 'react';

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