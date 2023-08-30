import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Results from './Results';
import './SearchResult.css'
const SearchResult = () => {
    const results = useLoaderData();
    return (
        <div>
            {
                results.meals ?
                    <div>
                        <h1>Search Items:</h1>
                        <div className='search-items'>
                            {
                                results.meals.map(result => <Results
                                    key={result.idMeal}
                                    result={result}
                                ></Results>)
                            }
                        </div>
                    </div>
                    :
                    <h2 className='none'>Not founded</h2>
            }
        </div>
    );
};

export default SearchResult;