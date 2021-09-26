import React, { useState } from 'react'

//forward this value to parent(Expenses.js )
const ExpenseFilter = (props) => {
    //bring back the prop (onChangedFilter) from parent
    const filterChangeHandler = (e) => {
        props.onChangedFilter(e.target.value)
    }

    return (
        <div>
            <div className='expenses-filter'>
                <div className='expenses-filter-control'>
                    <label>Filter by year</label>
                    <select value={props.selected} onChange={filterChangeHandler}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ExpenseFilter;