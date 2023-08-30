import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Latest from './Latest';
import './Home.css'
const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h1 className='title'>Our Latest Foodies</h1>
            <div className='topItems-container'>
                {
                    categories.categories.map(category => <Latest
                    key={category.idCategory}
                    category={category}
                    >
                    </Latest>)
                }
            </div>
        </div>
    );
};

export default Home;