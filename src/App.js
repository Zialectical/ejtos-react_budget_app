import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <div className='rectangle-box budget-box'>
                            <Budget />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='rectangle-box remaining-box'>
                            <Remaining />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='rectangle-box spent-box'>
                            <ExpenseTotal />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='rectangle-box currency-box'>
                            <Currency />
                        </div>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;