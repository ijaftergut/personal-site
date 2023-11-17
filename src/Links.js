import React from 'react';
const Links = ()=> {
    const renderLinkHarmonicHarbor = () => {
        window.location.href = "https://harmonic-harbor.onrender.com";
      };
      const renderLinkThreeWishes= () => {
        window.location.href = "https://three-wishes.onrender.com";
      };
  return (
    <div className='all'>
      <h2>Links</h2>
      <h4>Visit Harmonic Harbor:</h4>
      <button className="button" onClick={renderLinkHarmonicHarbor}>Harmonic Harbor</button>
      <h4>Visit Three Wishes:</h4>
      <button className="button" onClick={renderLinkThreeWishes}>Three Wishes</button>
    </div>
  );
};

export default Links;
