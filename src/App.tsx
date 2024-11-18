import { useState } from 'react';
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

      {/* Google Maps iframe positioned at the bottom right */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.8821381386508!2d19.488583239291483!3d50.83553004291708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47174f71d4193ac7%3A0x5aa7e433ceb5748f!2zTWlsaW9uw7N3!5e0!3m2!1spl!2spl!4v1731964962368!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
