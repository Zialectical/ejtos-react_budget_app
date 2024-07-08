import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    //I've added the following line to calculate the total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    
    const handleBudgetChange = (event) => {
    //I've added 'parseInt' to convert the string to an integer
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

    //I've added the following to "decreaseBudget" as long as the new budget is less than totalExpsenses (calculated above)
    
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
                
                <button onClick={decreaseBudget}>
                    -
                </button>
                
                <input 
                    type="number" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                    //Added the below line to display the currency symbol
                    placeholder={`${currency}0`}
                />
                
                <button onClick={increaseBudget}>
                    +
                </button>
            
            </div>
        </div>
    );
};

export default Budget;