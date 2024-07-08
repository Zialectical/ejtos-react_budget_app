import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor='currency'>Currency ({currency})</label>
            <select 
                className='form-control'
                id='currency'
                value={currency}
                onChange={handleCurrencyChange}
                style={{ width: 'auto', display: 'inline-block', marginLeft: '10px' }}
            >
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;