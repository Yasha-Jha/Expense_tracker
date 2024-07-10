// const addExpenseBtn = document.getElementById("add-expense-btn");
// const tableExpense = document.getElementById("expense-list");
// const paraTotalAmount = document.getElementById("para_total_amount");
// let total = 0;

// function totalAmount(expenseAmount) {
//   total = total + expenseAmount;

//   paraTotalAmount.innerHTML = `<p id="para_total_amount">
//             Total: Rs.<span id="total-amount">${total}</span>
//           </p>`;
// }

// function updatedAmount(remove) {
//   total = total - remove;
//   paraTotalAmount.innerHTML = `<p id="para_total_amount">
//             Total: Rs.<span id="total-amount">${total}</span>
//           </p>`;
// }

// addExpenseBtn.addEventListener("click", () => {
//   // function get_text() {
//   const expenseName = document.getElementById("expense-name").value;
//   const expenseAmount = Number(document.getElementById("expense-amount").value);
//   //   console.log(expenseAmount);
//   const newRow = document.createElement("tr");

//   newRow.innerHTML = `
//               <td>${expenseName}</td>
//               <td>Rs. ${expenseAmount}</td>
//               <td>
//                 <button id="delete-btn" class="delete-btn" type="button">
//                   Delete
//                 </button>
//               </td>`;

//   tableExpense.appendChild(newRow);

//   totalAmount(expenseAmount);

//   const deleteBtns = newRow.querySelectorAll(".delete-btn");

//   deleteBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       //   newRow.remove();
//       const row = e.target.closest("tr");
//       const amountCell = row.querySelector("td:nth-child(2)");
//       const amountString = amountCell.textContent.trim();
//       const amountValue = Number(amountString.replace("Rs. ", ""));

//       updatedAmount(amountValue);
//       newRow.remove();
//     });
//   });

//   //   const deleteBtn = document.getElementById("delete-btn");
//   //   deleteBtn.addEventListener("click", (e) => {
//   //     // console.log(e.target);
//   //     // console.log(e.target.parentNode.parentNode);
//   //     console.log(e.target.parentNode.parentNode.children[1]);
//   //     let removeAmount = e.target.parentNode.parentNode.children[1].textContent;
//   //     removeAmount = removeAmount.replace("Rs.", "").trim();
//   //     updatedAmount(removeAmount);

//   //     e.target.parentNode.parentNode.remove();
//   //   });
// });

const addSalaryBtn = document.getElementById("add-salary-btn");
const addExpenseBtn = document.getElementById("add-expense-btn");
const tableExpense = document.getElementById("expense-list");
const paraTotalAmount = document.getElementById("para_total_amount");
const totalSalaryElem = document.getElementById("total-salary");
const totalExpensesOverviewElem = document.getElementById(
  "total-expenses-overview"
);
const netSavingsElem = document.getElementById("net-savings");
const emojiIndicator = document.getElementById("emoji-indicator");

let totalSalary = 0;
let totalExpenses = 0;

function updateOverview() {
  totalExpensesOverviewElem.textContent = totalExpenses;
  const netSavings = totalSalary - totalExpenses;
  netSavingsElem.textContent = netSavings;

  if (netSavings >= 70) {
    emojiIndicator.textContent = "😊😊😊😊"; // Very happy face
  } else if (netSavings >= 50) {
    emojiIndicator.textContent = "🙂🙂🙂"; // Happy face
  } else if (netSavings >= 30) {
    emojiIndicator.textContent = "😟😟"; // Sad face
  } else {
    emojiIndicator.textContent = "🤯🤯"; // Very sad (mind blowing) face
  }
}

function totalAmount(expenseAmount) {
  totalExpenses += expenseAmount;
  paraTotalAmount.innerHTML = `Total: Rs.<span id="total-amount">${totalExpenses}</span>`;
  updateOverview();
}

function updatedAmount(remove) {
  totalExpenses -= remove;
  paraTotalAmount.innerHTML = `Total: Rs.<span id="total-amount">${totalExpenses}</span>`;
  updateOverview();
}

function addSalary() {
  const salaryAmount = Number(document.getElementById("salary-amount").value);
  totalSalary += salaryAmount;
  totalSalaryElem.textContent = totalSalary;
  updateOverview();
}

function addExpense() {
  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = Number(document.getElementById("expense-amount").value);
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${expenseName}</td>
    <td>Rs. ${expenseAmount}</td>
    <td>
      <button class="delete-btn" type="button">
        Delete
      </button>
    </td>`;

  tableExpense.appendChild(newRow);
  totalAmount(expenseAmount);

  newRow.querySelector(".delete-btn").addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    const amountCell = row.querySelector("td:nth-child(2)");
    const amountString = amountCell.textContent.trim();
    const amountValue = Number(amountString.replace("Rs. ", ""));

    updatedAmount(amountValue);
    row.remove();
  });
}
