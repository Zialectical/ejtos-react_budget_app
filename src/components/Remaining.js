import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { remaining, currency } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {currency.split(' ')[0]}{remaining}</span>
        </div>
    );
};

export default Remaining;