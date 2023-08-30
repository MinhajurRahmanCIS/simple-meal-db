import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();

    const handelSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;

        navigate(`/searchResult/${search}`);
        form.reset();
    }

    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/items'>Items</Link>
            </div>
            <form onSubmit={handelSearch}>
                <input name="search" type="text" placeholder='Search Items' />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;