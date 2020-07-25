import React from 'react';

function Card (props){
  const {character} = props;
  return (
    <div className="card">
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          Status: {character.status} <br />
          Species: {character.species} <br />
          Gender: {character.gender}
        </p>
      </div>
    </div>
  );
} 

export default Card;