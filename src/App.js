import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense'
import Styles from './style.css'

//The Expense Data Object
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 258,
    date: new Date(2019, 8, 7)
  },
  {
    id: 'e2',
    title: 'Food Cost',
    amount: 370,
    date: new Date(2020, 3, 15)
  },
  {
    id: 'e3',
    title: 'Electricity bills',
    amount: 1000,
    date: new Date(2021, 6, 9)
  },
  {
    id: 'e4',
    title: 'Other expenses',
    amount: 369,
    date: new Date(2021, 5, 12)
  }]

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

  }

  return (
    //Expense Component is returned here
    //using the item props thats being used in expenses component
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;


