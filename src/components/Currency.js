import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className='currency-container'>
            <div className='currency-box'>
                <span>Currency ({currency})</span>
                <select className='currency-dropdown' value={currency} onChange={handleCurrencyChange}>
                    <option value="$ Dollar">$ Dollar</option>
                    <option value="£ Pound">£ Pound</option>
                    <option value="€ Euro">€ Euro</option>
                    <option value="₹ Rupee">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;