import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ItemDetails.css'
const ItemDetails = () => {
    const itemDetails = useLoaderData();
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = itemDetails.meals[0];
    return (
        <div className='itemDetails-container'>
            <img src={strMealThumb} alt="" />
            <div>
                <h1>{strMeal}</h1>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
                <p><span><strong>Instructions:</strong></span> <br />{strInstructions}</p>
            </div>
        </div>
    );
};

export default ItemDetails;