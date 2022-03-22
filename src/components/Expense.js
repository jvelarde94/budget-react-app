import { React, useEffect, useState } from "react";

/* TODO:
  - Add delete item for each item
  - Add delete item functionality
*/

const Expense = ({ expenses, onDelete }) => {
  const deleteExpense = (e) => {
    // Get number in id of element to delete
    let elementId = e.target.parentElement.id.replace(/^\D+/g, "");

    // Find index of object to delete in expenses array
    let indexOfElement = expenses.findIndex(
      (expense) => expense.id == elementId
    );

    // Delete expense
    expenses.splice(indexOfElement, 1);
    // e.target.parentElement.remove()
    onDelete(expenses);
  };

  // Show/hide dividers in expense box
  useEffect(() => {
    let topDivider = document.getElementsByClassName("top-divider");
    let verticalDivider = document.getElementsByClassName("vertical-line");

    if (typeof topDivider !== "undefined" && topDivider.length !== 0) {
      var topDividerArray = Array.from(topDivider);
    }

    if (
      typeof verticalDivider !== "undefined" &&
      verticalDivider.length !== 0
    ) {
      var verticalDividerArray = Array.from(verticalDivider);
    }

    if (expenses.length !== 0) {
      // Show expense list top divider when expenses are not empty
      if (topDividerArray.length !== 0) {
        topDividerArray.forEach((element) => {
          if (element.className.includes("hide")) {
            element.classList.add("show");
            element.classList.remove("hide");
          }
        });
      }

      // Show expense list vertical divider when expenses are not empty
      if (verticalDividerArray.length !== 0) {
        verticalDividerArray.forEach((element) => {
          if (element.className.includes("hide")) {
            element.classList.add("show");
            element.classList.remove("hide");
          }
        });
      }
    } else {
      topDividerArray.forEach((element) => {
        if (element.className.includes("show")) {
          element.classList.add("hide");
          element.classList.remove("show");
        }
      });
      verticalDividerArray.forEach((element) => {
        if (element.className.includes("show")) {
          element.classList.add("hide");
          element.classList.remove("show");
        }
      });
    }
  }, [expenses]);

  return (
    <div className="row expense-list">
      <div className="expense-column-needs col-md-5">
        <hr className="top-divider expense-divider  hide" />
        {expenses &&
          expenses.map((expense) => (
            <div
              key={"n-" + expense.id}
              id={"need-" + expense.id}
              className={expense.type === "need" ? "expense-row-need" : "hide"}
            >
              <span
                className={
                  expense.type === "need" ? "expense-label-need" : "hide"
                }
              >
                {expense.name}:
              </span>
              <span className="expense-amount">${expense.amount}</span>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={(e) => deleteExpense(e)}
              />
              {/* <button onClick={(e) => deleteExpense(e)}>Delete</button> */}
              <hr className="expense-divider" />
            </div>
          ))}
      </div>

      <div className="vertical-line hide col-md-1 offset-md-1" />

      <div className="expense-column-wants col-md-5">
        <hr className="top-divider expense-divider hide" />
        {expenses &&
          expenses.map((expense) => (
            <div
              key={"w-" + expense.id}
              id={"want-" + expense.id}
              className={expense.type === "want" ? "expense-row-want" : "hide"}
            >
              <span
                className={
                  expense.type === "want" ? "expense-label-want" : "hide"
                }
              >
                {expense.name}:
              </span>
              <span className="expense-amount">${expense.amount}</span>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={(e) => deleteExpense(e)}
              />
              {/* <button onClick={(e) => deleteExpense(e)}>Delete</button> */}
              <hr className="expense-divider" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Expense;
