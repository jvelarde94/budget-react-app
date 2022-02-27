import {React, useState} from 'react'

/* TODO:
  - Add delete item for each item
*/

const Expense = ({expenses, expType}) => {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.name} className="expense-row">
          <span
            className={
              expense.type === "want" ? "expense-label-want" : expense.type === "need" ? "expense-label-need" : "" 
            }>
            {expense.name}: 
          </span>
          <span className="expense-amount">${expense.amount}</span>
          {/* <span
            className={expense.type === "want" ? "expense-type-want" : expense.type === "need" ? "expense-type-need" : "" }>{expense.type}
          </span> */}
        </div>

        // TODO: 
        // - Add delete item functionality
      ))}
    </div>
  )
}

export default Expense