import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img 
        alt='caracters'
        src={`https://cdn6.dibujos.net/images/listas/117/${props.caracters.jpgname}.jpg`}
        /* src={`https://robohash.org/${props.caracters.id}?set=set2&size=180x180`} */
        />
    
    <h2> Name: {props.caracters.name} </h2>
    <h3> score: {props.caracters.puntos} </h3>
    </div>
);
