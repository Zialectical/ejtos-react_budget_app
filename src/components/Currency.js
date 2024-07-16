import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className='currency-row'>
            <span>Currency:</span>
                <select className="currencySelect" value={currency} onChange={handleCurrencyChange}>
                    <option value="£ Pound">£ Pound</option>
                    <option value="$ Dollar">$ Dollar</option>
                    <option value="€ Euro">€ Euro</option>
                    <option value="₹ Rupee">₹ Rupee</option>
                   
                </select>
        </div>
    );
};

export default Currency;