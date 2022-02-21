import React from 'react'
import Expenses from './Expenses'

const Expense = ({expenses, onSubmit}) => {

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div className="expense-row">
          <span className="expense-label">{expense.name}: </span>
          <span className="expense-amount">${expense.amount}</span>
        </div>
        // <span className="expense-amount">{expense.amount}</span>
      ))}
      {/* <span className="expense-label">{expenses.name}: </span> */}
      <span className="expense-amount">{expenses.amount}</span>
    </div>
  )
}

export default Expense