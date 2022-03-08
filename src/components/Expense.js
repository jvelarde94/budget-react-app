import {React, useState} from 'react'

/* TODO:
  - Add delete item for each item
  - Add delete item functionality
*/

const Expense = ({expenses, onDelete}) => {
  const deleteExpense = (e) => {
    // Get number in id of element to delete
    let elementId = e.target.parentElement.id.replace(/^\D+/g, '')

    // Find index of object to delete in expenses array
    let indexOfElement = expenses.findIndex(expense => expense.id == elementId)
    
    // Delete expense
    expenses.splice(indexOfElement, 1)
    // e.target.parentElement.remove()
    onDelete(expenses)
  }

  return (
    <div className="expense-list">
      <div className="expense-column-needs">
        {expenses && expenses.map((expense) => (
          <div key={'n-'+expense.id} id={"need-"+expense.id} className={
            expense.type === "need" ? "expense-row-need" : "hide"
          }>
            <span
              className={
                expense.type === "need" ? "expense-label-need" : "hide" 
              }>
              {expense.name}: 
            </span>
            <span className="expense-amount">${expense.amount}</span>
            <button onClick={(e) => deleteExpense(e)}>Delete</button>
          </div>
        )
        )}
      </div>

      {/* <div className="vertical-line"/> */}

      <div className="expense-column-wants">
        {expenses && expenses.map((expense) => (
          <div key={'w-'+expense.id} id={"want-"+expense.id} className={
            expense.type === "want" ? "expense-row-want" : "hide"
          }>
            <span
              className={
                expense.type === "want" ? "expense-label-want" : "hide" 
              }>
              {expense.name}: 
            </span>
            <span className="expense-amount">${expense.amount}</span>
            <button onClick={(e) => deleteExpense(e)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expense