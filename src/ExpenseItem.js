import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);

    const handleIncrease = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const handleDecrease = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <li key={expense.id} className='list-group-item d-flex justify-content-between align-items-center'>
                    {expense.name}
                    <span>
                        <span className='badge badge-primary badge-pill mr-3'>
                            £{expense.cost}
                        </span>
                        <button className='btn btn-success btn-sm mr-1' onClick={() => handleIncrease(expense.name)}>
                            +
                        </button>
                        <button className='btn btn-danger btn-sm' onClick={() => handleDecrease(expense.name)}>
                            -
                        </button>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;