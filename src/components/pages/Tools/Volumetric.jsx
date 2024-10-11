import React from 'react';
import './volumetric.css'; 
import airVol from "../../../images/Air-volume1.png";
import roadVol from "../../../images/Road-volume2.png";
import BoxD1 from "../../../images/BoxDiagram1.jpg";
import BoxD2 from "../../../images/BoxDiagram2.jpg";

const Volumetric = () => {
  return (
    <div className='conversion-container'>
      <h1>Volumetric Weight</h1>

      <div className='volumetric-weight-section'>
        <div className='volumetric-section'>
          <h3>Volumetric Weight by AIR</h3>
          <p>
            Actual weight or Volumetric weight, whichever is HIGHER, should be taken while calculating the rates. 
            Formula for arriving at Volumetric Weight by Air:
          </p>
          <img src={airVol} alt="Volumetric Weight by Air Formula" className="volumetric-image" />
          <img src={BoxD1} alt="Box Diagram for Air" className="volumetric-image" />
        </div>

        <div className='volumetric-section'>
          <h3>Volumetric Weight by Road</h3>
          <p>
            Actual weight or Volumetric weight, whichever is HIGHER, should be taken while calculating the rates. 
            Formula for arriving at Volumetric Weight by Road:
          </p>
          <img src={roadVol} alt="Volumetric Weight by Road Formula" className="volumetric-image" />
          <img src={BoxD2} alt="Box Diagram for Road" className="volumetric-image" />
        </div>
      </div>
    </div>
  );
};

export default Volumetric;
