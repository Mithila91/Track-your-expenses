import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        //request being prevented, page does not reaload now
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // go back to Initial state after submitting
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    return (
        //Two-way binding is a goor practice with forms
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="button" onClick={props.onCancelEditing}>Cancel</button>
                <button type="submit">Add Expense</button></div>
        </form>
    )
}

export default ExpenseForm;