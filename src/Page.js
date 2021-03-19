import React from 'react';
import Tiles from './Tiles'
import items from './Items';

const Page =() =>(
    <div>
    <div className='page-header'>
        <div className='header-image'>
        </div>
        <h1 className='header-title'>Aviation Explorer</h1>
        <div>
            <span>37 Boards</span>
            <span>8.9K Pins</span>
            <span>186 Likes</span>
            <span>8.9K Followers</span>
            <span>1.6K Following</span>
        </div>
    </div>
    <div>
        <Tiles items={items} />
    </div>
    </div>
);

export default Page;