import React, { useState, Fragment } from 'react';
import ReactSlider from 'react-slider';

import './slider.styles.css';

const Slider = () => {

const [value, setValue] = useState(0);

const handleAfterChange = (event, newValue) => {
  newValue = event;
  setValue(newValue); 
  console.log("slider value: " + newValue); 
};

  return (
    <Fragment>
      <div className="slider-container">
      <h2>React Slider</h2>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        max={100}
        value={value}
        onAfterChange={handleAfterChange}
      />
      </div>
    </Fragment>
  );
};

export default Slider;
