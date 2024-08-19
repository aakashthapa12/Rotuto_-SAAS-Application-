import React from 'react';
import aboutImage from '../../assets/flawless.png';

const AboutImage = () => {
  return (
    <div className="p-2 lg:p-4">
      <img src={aboutImage} alt="About" className="rounded-3xl w-full h-auto object-cover" />
    </div>
  );
}

export default AboutImage;
