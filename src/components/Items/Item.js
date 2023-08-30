import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
const Item = ({item}) => {
    const {strMeal, strMealThumb, idMeal} = item;
    return (
        <div className='item'>
            <h1>{strMeal}</h1>
            <img src={strMealThumb} alt="" />
            <Link to={`/itemDetails/${idMeal}`}><button>Details</button></Link>
        </div>
    );
};

export default Item;