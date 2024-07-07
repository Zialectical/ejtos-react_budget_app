import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
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

// 1. Sets the initial state when the app loads
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

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

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
            {props.children}
        </AppContext.Provider>
    );
};