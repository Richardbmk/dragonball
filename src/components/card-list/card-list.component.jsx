import React from 'react';

import { Card } from '../card/card.component'

import './card-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {props.caracters.map(caracters => (
            <Card key={caracters.id} caracters={caracters} />
        ))}
    </div>
);