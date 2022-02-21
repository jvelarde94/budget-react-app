import React from 'react'

/* TODO:
  - Add delete item for each item
*/

const Expense = ({expenses}) => {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.name} className="expense-row">
          <span className="expense-label">{expense.name}: </span>
          <span className="expense-amount">${expense.amount}</span>
        </div>
        // Add delete item here
      ))}
    </div>
  )
}

export default Expense