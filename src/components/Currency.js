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
        <div className="rectangle-box currency-box">
            <div className="alert currency-dropdown">
                <label htmlFor="currency">Currency ({currency}) </label>
                <select id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Currency;