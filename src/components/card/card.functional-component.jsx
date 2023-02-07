import React from 'react';
import './card.styles.css';

const Card = ({cat}) => {
    const { id, name, email } = cat;
    return (
        <div className="card-container" key={id}>
            <img 
                src={`https://robohash.org/${id}?set=set4&size=180x180`} 
                alt={`cat ${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

}

export default Card;
