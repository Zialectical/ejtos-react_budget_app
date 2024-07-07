import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const updatedExpenses = state.expenses.map(exp => 
                exp.name === action.payload.name
                    ? { ...exp, cost: exp.cost + action.payload.cost }
                    : exp
            );

            const totalCost = updatedExpenses.reduce((total, exp) => total + exp.cost, 0);
            if (totalCost > state.budget) {
                alert("Cannot increase the allocation! Out of funds");
                return state;
            }

            return {
                ...state,
                expenses: updatedExpenses,
            };

        case 'RED_EXPENSE':
            const reducedExpenses = state.expenses.map(exp => 
                exp.name === action.payload.name && exp.cost - action.payload.cost >= 0
                    ? { ...exp, cost: exp.cost - action.payload.cost }
                    : exp
            );

            return {
                ...state,
                expenses: reducedExpenses,
            };

        case 'DELETE_EXPENSE':
            const deletedExpenses = state.expenses.map(exp =>
                exp.name === action.payload ? { ...exp, cost: 0 } : exp
            );

            return {
                ...state,
                expenses: deletedExpenses,
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };

        default:
            return state;
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const remaining = state.budget - totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };