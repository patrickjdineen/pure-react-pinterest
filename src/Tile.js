import React from 'react';

const Tile = ({ item }) => (
    <div className='tile-container'>
        <h3 className='tile-header'>{item.title}</h3>
        <h5 className='tile-subheading'>{item.source}</h5>
        <h1>First image</h1>
        <div>
            <span className='small-img'>small img1</span>
            <span className='small-img'>small img2</span>
            <span className='small-img'>small img3</span>
        </div>
        <button className='follow-button'>Follow</button>
    </div>
);

export default Tile