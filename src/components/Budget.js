import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(parseInt(event.target.value));
    };

    const increaseBudget = () => {
        if (newBudget + 10 <= 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget + 10,
            });
            setNewBudget(newBudget + 10);
        }
    };

    const decreaseBudget = () => {
        if (newBudget - 10 >= totalExpenses) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget - 10,
            });
            setNewBudget(newBudget - 10);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{newBudget}</span>
            <div>
                <button onClick={decreaseBudget}>-</button>
                <input 
                    type="number" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                    placeholder={`${currency}0`}
                />
                <button onClick={increaseBudget}>+</button>
            </div>
        </div>
    );
};

export default Budget;