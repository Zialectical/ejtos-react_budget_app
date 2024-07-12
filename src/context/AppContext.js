import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: 'Marketing', cost: 50 },
        { id: 2, name: 'Finance', cost: 300 },
        { id: 3, name: 'Sales', cost: 70 },
        { id: 4, name: 'HR', cost: 40 },
        { id: 5, name: 'IT', cost: 500 }
    ],
    currency: '£ Pound'
};

// Reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(exp => 
                    exp.name === action.payload.name
                        ? { ...exp, cost: exp.cost + action.payload.cost }
                        : exp
                )
            };
        case 'RED_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(exp => 
                    exp.name === action.payload.name && exp.cost - action.payload.cost >= 0
                        ? { ...exp, cost: exp.cost - action.payload.cost }
                        : exp
                )
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(exp => exp.id !== action.payload)
            };
        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload
            };
        default:
            return state;
    }
};

// Create context
export const AppContext = createContext();
// Provider component

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            currency: state.currency,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    );
};