import React from 'react'

import './card.styles.scss';

function Card(props) {
    return (
        <div key={props.id} className='card'>
            <div className='img' style={{backgroundImage : `url(${props.imageUrl})`}}></div>
           <div className='tags'>
               <span>{props.name}</span>
               <span>{props.price}</span>
           </div>
        </div>
    )
}

export default Card
