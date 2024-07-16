import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    // Validate expenses
    expenses.forEach(item => {
        if (typeof item.cost !== 'number') {
            throw new Error('Expense cost must be a number');
        }
    });

    // Removed the currency validation to ensure it includes a number after a space
    // const currencyParts = currency.split(' ');
    // if (currencyParts.length < 2 || isNaN(parseFloat(currencyParts[1]))) {
    //     throw new Error('Currency must include a number after a space');
    // }

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
        <span>Spent so far: {currency.split(' ')[0]}{totalExpenses}</span>
    );
};

export default ExpenseTotal;