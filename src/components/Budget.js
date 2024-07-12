import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Retrieve both budget and dispatch from AppContext
    const { dispatch, currency, budget } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        // Convert the input value to a number before dispatching
        dispatch({
            type: 'SET_BUDGET',
            payload: { budget: Number(event.target.value) }
        });
    };

    const getCurrencySymbol = (currency) => {
        const currencyMap = {
            "£ Pound": "£",
            "$ Dollar": "$",
            "€ Euro": "€",
            "₹ Rupee": "₹"
        };
        return currencyMap[currency] || currency;
    };

    return (
        <span>Budget: <strong>{getCurrencySymbol(currency)}</strong>
            <input 
                type="number" 
                value={budget} // Set the input's value to the budget
                onChange={handleBudgetChange}
                min="0"
                step="10"
            />
        </span>
    );
};

export default Budget;