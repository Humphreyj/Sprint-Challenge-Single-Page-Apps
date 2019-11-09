import React from 'react';

const EpisodeCard = (props) => {
  return (
    <div className="card">
     
      <h3 className="name">{props.name}</h3>
      <h5 className="episode-number">{props.episode}</h5>
      
    
    </div>
  );
}

export default EpisodeCard;
