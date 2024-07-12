import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
            <span>Spent so far: {currency.split(' ')[0]}{totalExpenses}</span>
    );
};

export default ExpenseTotal;