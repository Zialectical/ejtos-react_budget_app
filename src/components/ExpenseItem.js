import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: props.name, cost: 10 }
        });
    };

    const decreaseAllocation = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: { name: props.name, cost: 10 }
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.split(' ')[0]}{props.cost}</td>
            <td><button className="increaseByTen" onClick={increaseAllocation}>+</button></td>
            <td><button className="decreaseByTen" onClick={decreaseAllocation}>-</button></td>
            <td><button className="deleteLineItem" onClick={handleDelete}>x</button></td>
        </tr>
    );
};

export default ExpenseItem;