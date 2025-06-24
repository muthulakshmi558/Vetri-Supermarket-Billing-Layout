// src/pages/ThankYouPage.jsx
import React from 'react';
import thankyouImage from '../assets/images/thankyou.png'; // 👈 Save your image here

const ThankYouPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="text-center">
        <img
          src={thankyouImage}
          alt="Thank You"
          style={{ maxWidth: '300px', marginBottom: '20px' }}
        />
        <h3 className="fw-bold">Thank You For Shopping!!!</h3>
      </div>
    </div>
  );
};

export default ThankYouPage;
