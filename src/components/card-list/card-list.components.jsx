import React from 'react'

import Card from '../card/card.components';
import './card-list.styles.scss';


function CardList({filtredItems}) {
    return (
        <div className='list'>
            {
            filtredItems
            .map( ({id, ...otherProps}) => <Card key={id} {...otherProps}/>)
           }
        </div>
    )
}

export default CardList
