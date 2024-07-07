import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <li key={expense.id} className='list-group-item'>
                    {expense.name}: £{expense.cost}
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;