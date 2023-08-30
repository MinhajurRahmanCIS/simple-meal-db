import React from 'react';
import './Results.css';
import { Link } from 'react-router-dom';
const Results = ({result}) => {
    const {strMeal, strMealThumb, idMeal} = result;
    return (
        <div className='results'>
            <h1>{strMeal}</h1>
            <img src={strMealThumb} alt="" />
            <Link to={`/itemDetails/${idMeal}`}><button>Details</button></Link>
        </div>
    );
};

export default Results;