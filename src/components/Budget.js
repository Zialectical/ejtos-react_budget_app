import React, { useContext } from 'react'; 
import { AppContext } from '../context/AppContext'; 
import '../App.css';

const Budget = () => {
    // Retrieve both budget and dispatch from AppContext
    const { dispatch, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        // Convert the input value to a number before dispatching
        dispatch({
            type: 'SET_BUDGET',
            payload: Number(event.target.value)  // Directly pass the number value
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
        <div className="budget-row">
            <span>Budget:</span>
            <div className="currency-symbol-container">
                <span className='budgetCurrencySymbol'><strong>{getCurrencySymbol(currency)}</strong></span>
                <input 
                    type="number"
                    onChange={handleBudgetChange}
                    min="0"
                    step="10"
                    id="budgetInput" // added unique id attribute
                />
            </div>
        </div>
    );
};

export default Budget;