import {React, useState} from 'react'

/* TODO:
  - Add delete item for each item
  - Add delete item functionality
*/

const Expense = ({expenses, expType, onDelete}) => {
  const deleteExpense = (e, id) => {
    // e.target.parentElement.remove()
    onDelete(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className="expense-list">
      <div className="expense-column-needs">
        {expenses.map((expense) => (
          <div key={'n-'+expense.id} className={
            expense.type === "need" ? "expense-row-need" : "hide"
          }>
            <span
              className={
                expense.type === "need" ? "expense-label-need" : "hide" 
              }>
              {expense.name}: 
            </span>
            <span className="expense-amount">${expense.amount}</span>
            <button onClick={(e) => deleteExpense(e, expense.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* <div className="vertical-line"/> */}

      <div className="expense-column-wants">
        {expenses.map((expense) => (
          <div key={expense.name} className={
            expense.type === "want" ? "expense-row-want" : "hide"
          }>
            <span
              className={
                expense.type === "want" ? "expense-label-want" : "hide" 
              }>
              {expense.name}: 
            </span>
            <span className="expense-amount">${expense.amount}</span>
            <button onClick={(e) => deleteExpense(e, expense.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expense