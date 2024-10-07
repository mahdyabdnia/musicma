// Loader.js
import React from 'react';
import './style.css'
const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;