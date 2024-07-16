import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Remaining = () => {
    const { budget, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + Number(item.cost); // Explicitly cast item.cost to a number
    }, 0);

    const remaining = budget - totalExpenses;

    return (
            <span>Remaining: {currency.split(' ')[0]}{remaining}</span>
    );
};

export default Remaining;