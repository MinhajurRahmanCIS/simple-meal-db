import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Items.css'
import Item from './Item';
const Items = () => {
    const items = useLoaderData();
    return (
        <div>
            <h2>Total Items: {items.length}</h2>
            <div className='items'>
                {
                    items.meals.map(item => <Item
                    key={item.idMeal}
                    item={item}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default Items;