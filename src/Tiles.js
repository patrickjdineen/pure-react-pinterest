import React from 'react';
import Tile from './Tile'

const Tiles = ({ items }) => (
    <div className="tiles-container">
        {items.map(item =>(
            <Tile key={item.id} item={item} />
        )
            )}
    </div>
);

export default Tiles