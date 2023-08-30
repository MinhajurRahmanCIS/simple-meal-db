import React from 'react';
import './Latest.css';

const Latest = ({category}) => {
    const {strCategory, strCategoryThumb} = category;
    return (
        <div className='latest'>
            <h2>{strCategory}</h2>
            <img src={strCategoryThumb} alt="" />
        </div>
    );
};

export default Latest;