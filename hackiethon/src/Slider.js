import React from 'react';
import './Slider.css';

function Slider({ minutes, seconds, percentage }) {
  let formattedPercentage = percentage / 9;
  return (
    <>
      <div className="slider">
        <div
          className="slider-animation"
          style={{ transform: `translateX(-${formattedPercentage}%)` }}
        ></div>
      </div>
      <div className="timer-remaining">
        {Math.round(formattedPercentage)}% left{' '}
      </div>
    </>
  );
}

export default Slider;
