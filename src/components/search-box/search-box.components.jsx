import React from 'react'

import './search-box.styles.scss';

function SearchBox({handleChange}) {
    return (
        <div className='search-box'>
            <input type="text" placeholder="Search Item" onChange={handleChange}/>
            <i className="fas fa-search"></i>
        </div>
    )
}

export default SearchBox
