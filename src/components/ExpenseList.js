import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses, currency } = useContext(AppContext);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id} 
                        id={expense.id} 
                        name={expense.name} 
                        cost={expense.cost} 
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;