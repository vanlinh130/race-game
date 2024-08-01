import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [pointsA, setPointsA] = useState(1);
    const [pointsB, setPointsB] = useState(1);
    const [status, setStatus] = useState('Same point');

    const handleRace = () => {
        const randomChar = Math.random() < 0.5 ? 'A' : 'B';

        if (randomChar === 'A') {
            setPointsA(pointsA + 1);
        } else {
            setPointsB(pointsB + 1);
        }

        updateStatus(pointsA + (randomChar === 'A' ? 1 : 0), pointsB + (randomChar === 'B' ? 1 : 0));
    };

    const handleReset = () => {
        setPointsA(1);
        setPointsB(1);
        setStatus('Same point');
    };

    const updateStatus = (newPointsA, newPointsB) => {
        if (newPointsA > newPointsB) {
            setStatus('A is winning');
        } else if (newPointsB > newPointsA) {
            setStatus('B is winning');
        } else {
            setStatus('Same point');
        }
    };

    return (
        <div className="App">
            <div className='header'>
              <div><img src='https://www.reactplus.vn/assets/icon/rpg_logo.png' alt='logo' className='img-logo' /></div>
              <h1 className='heading'>HAIBAZO - Entrance Test - ReactJS Internship</h1>
            </div>
            <div className='container'>
              <h1 className='status'>{status}</h1>
              <div>
                  <p>Character A</p>
                  <div className="progress-bar">
                      {Array.from({ length: pointsA }, (_, i) => (
                          <span key={i} className="point"></span>
                      ))}
                  </div>
              </div>
              <div>
                  <p>Character B</p>
                  <div className="progress-bar">
                      {Array.from({ length: pointsB }, (_, i) => (
                          <span key={i} className="point"></span>
                      ))}
                  </div>
              </div>
                <button onClick={handleRace}>Race</button>
                {(pointsA > 1 || pointsB > 1) && <button className='btn-reset' onClick={handleReset}>Reset</button>}
              
            </div>
        </div>
    );
};

export default App;
