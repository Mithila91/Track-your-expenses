import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    // getting the previous value for child component (ExpensesFilter.js)
    const filterChangeHandler = selectedYear => {
        //console.log to see that you are getting the previous value
        // console.log('Expenses.js')
        // console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        // now pass back the prop onChangedFilter to child (ExpenseFilter). 
        //map through to get the xpense object into ExpenseItem
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangedFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </div>
    )

}

export default Expenses;