import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import loader from '../../asstes/ZKZg.gif'
import './Root.css'
const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div className='loader'>
                {navigation.state === 'loading' &&  <img src={loader} alt="" />}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;