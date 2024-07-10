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
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>{currency.split(' ')[0]}</span>
                </div>
                <input 
                    type="number" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                    placeholder={`${currency.split(' ')[0]}0`}
                    className='form-control'
                />
                <div className='input-group-append'>
                    <button className='btn btn-primary' onClick={decreaseBudget}>-</button>
                    <button className='btn btn-primary' onClick={increaseBudget}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Budget;