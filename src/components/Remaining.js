import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budget, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const remaining = budget - totalExpenses;

    return (
            <span>Remaining: {currency.split(' ')[0]}{remaining}</span>
    );
};

export default Remaining;