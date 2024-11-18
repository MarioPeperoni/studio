import React, { useState } from 'react';
import './App.css';

function App() {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
  };

  return (
    <div>
      {!agreed ? (
        <div className="tos-container">
          <h1>Ile warte jest studio?</h1>
          <button onClick={handleAgree}>5 milionów</button>
          <button onClick={handleAgree}>gra skończona</button>
        </div>
      ) : (
        <div className="video-container">
          <video
            controls
            autoPlay
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <source src={`studio.mp4`} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

export default App;
