// log-out event

document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "./login.html";
});

// reading operation

// add money event works
// add money feature button events
const addMoneyFeature = document.getElementById("add-money-feature");
addMoneyFeature.addEventListener("click", function () {
  showSection("add-money-section");
});
// adding money events
const mainAccount = document.getElementById("main-account");
let mainAccountText = document.getElementById("main-account").innerText;
const addMoneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInputValue = getInputValueById("add-money-input");
    const addMoneyPin = getInputValueById("add-money-pin");
    if (addMoneyPin === 1234) {
      const addedAmount = addMoneyInputValue + Number(mainAccountText);
      mainAccount.innerText = addedAmount;

      // add the details to transaction history
      addToTransactionHistory("Added money", addMoneyInputValue, addedAmount);
    } else {
      alert("wrong pin");
    }
  });

// cash out event works
// cash out feature button events
const cashOutFeature = document.getElementById("cash-out-feature");
cashOutFeature.addEventListener("click", function () {
  showSection("cash-out-section");
});
// cash out money events

const cashOutBtn = document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutInputValue = getInputValueById("cash-out-input");

    const cashOutPin = getInputValueById("cash-out-pin");
    if (cashOutPin === 1234) {
      if (Number(mainAccountText) < cashOutInputValue) {
        return alert("not enough money");
      }
      const reducedAmount = Number(mainAccountText) - cashOutInputValue;
      mainAccount.innerText = reducedAmount;

      // transaction history add
      addToTransactionHistory("Cashed out", cashOutInputValue, reducedAmount);
    } else {
      alert("wrong pin");
    }
  });

// transfer feature events

document
  .getElementById("transfer-feature")
  .addEventListener("click", function () {
    showSection("transfer-section");
  });

// bonus feature events
document.getElementById("bonus-feature").addEventListener("click", function () {
  showSection("bonus-section");
});

// pay bill feature event

document
  .getElementById("pay-bill-feature")
  .addEventListener("click", function () {
    showSection("bill-section");
  });

// transaction feature event
document
  .getElementById("transaction-feature")
  .addEventListener("click", function () {
    showSection("transaction-section");
  });
