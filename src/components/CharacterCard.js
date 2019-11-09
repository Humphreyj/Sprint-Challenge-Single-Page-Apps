import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="card">
      <div className="character-info">
        <img src={props.image} alt={props.name} className="character-img"/>
      <h3 className="name">{props.name}</h3>
        <p className="species">{props.species}</p>
        <p className="gender">{props.gender}</p>
        <p className="status">{props.gender}</p>
      </div>
<div className="character-location">
  <p className="location"> Location: {props.location}</p>
  <p className="origin"> Origin: {props.origin}</p>
</div>
    </div>
  );
}

export default CharacterCard;
