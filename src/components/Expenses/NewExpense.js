import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        //gets the object from expenseform (expenseData)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //send to parent (app.js) via props
        props.onAddExpense(expenseData)
        //close the form when submitted
        setIsEditing(false)
    }

    const startEditHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        //show button if isEditing is false
        //show form if isEditing is tru
        <div className="new-expense">
            {!isEditing && <button onClick={startEditHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={stopEditingHandler} />}
        </div>
    )
}
export default NewExpense;

