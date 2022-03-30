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

  // Show/hide expense titles and dividers in expense box
  useEffect(() => {
    let needsColumnTitle = document.getElementById("expense-title-needs");
    let wantsColumnTitle = document.getElementById("expense-title-wants");
    let verticalDivider = document.getElementsByClassName("vertical-line");
    let formDivider = document.getElementById("expense-form-divider");

    if (
      typeof verticalDivider !== "undefined" &&
      verticalDivider.length !== 0
    ) {
      var verticalDividerArray = Array.from(verticalDivider);
    }

    if (expenses.length !== 0) {
      // Show expense list titles when expenses are not empty
      if (
        typeof needsColumnTitle !== "undefined" &&
        needsColumnTitle.className.includes("hide")
      ) {
        needsColumnTitle.classList.add("show");
        needsColumnTitle.classList.remove("hide");
      }
      if (
        typeof wantsColumnTitle !== "undefined" &&
        wantsColumnTitle.className.includes("hide")
      ) {
        wantsColumnTitle.classList.add("show");
        wantsColumnTitle.classList.remove("hide");
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

      // Show expense form divider
      if (formDivider.className.includes("hide")) {
        formDivider.classList.add("show");
        formDivider.classList.remove("hide");
      }
    } else {
      // Hide list titles and dividers when expenses is empty
      if (needsColumnTitle.className.includes("show")) {
        needsColumnTitle.classList.add("hide");
        needsColumnTitle.classList.remove("show");
      }
      if (wantsColumnTitle.className.includes("show")) {
        wantsColumnTitle.classList.add("hide");
        wantsColumnTitle.classList.remove("show");
      }

      verticalDividerArray.forEach((element) => {
        if (element.className.includes("show")) {
          element.classList.add("hide");
          element.classList.remove("show");
        }
      });

      if (formDivider.className.includes("show")) {
        formDivider.classList.add("hide");
        formDivider.classList.remove("show");
      }
    }
  }, [expenses]);

  return (
    <div className="row expense-list">
      <div className="expense-column-needs col-md-5">
        <h4 id="expense-title-needs" className="hide">
          Needs
        </h4>
        {expenses &&
          expenses.map((expense) => (
            <div
              key={"n-" + expense.id}
              id={"need-" + expense.id}
              className={expense.type === "need" ? "expense-row-need" : "hide"}
            >
              <hr className="expense-divider" />
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
            </div>
          ))}
      </div>

      <div className="vertical-line hide col-md-1 offset-md-1" />

      <div className="expense-column-wants col-md-5">
        <h4 id="expense-title-wants" className="hide">
          Wants
        </h4>
        {expenses &&
          expenses.map((expense) => (
            <div
              key={"w-" + expense.id}
              id={"want-" + expense.id}
              className={expense.type === "want" ? "expense-row-want" : "hide"}
            >
              <hr className="expense-divider" />
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default Expense;
