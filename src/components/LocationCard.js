import React from 'react';

const LocationCard = (props) => {
  return (
    <div className="card">
     
      <h3 className="name">{props.name}</h3>
      <h6 className="type">{props.type}</h6>
    
    </div>
  );
}

export default LocationCard;
