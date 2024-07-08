import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//Added an additional component to allow the user to select the currency
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext); 

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
		//Added a dropdown to allow the user to select the currency
        <div className='form-group'>
            <label htmlFor='currency'>Currency</label> 
            <select 
                className='form-control'
                id='currency'
                value={currency}
                onChange={handleCurrencyChange}
        //Need to test the below "Currency" values
			>
  				<option value='$'>$ Dollar</option>
                <option value='室'>室</option>
                <option value='⯬'>⯬</option>
                <option value='￡'>￡</option>
            </select>
        </div>
    );
};

export default Currency;