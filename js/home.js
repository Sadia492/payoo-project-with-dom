// log-out event

document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "./login.html";
});

// reading operation
const latestSection = document.getElementById("latest-section");

const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cash-out-section");
const transferSection = document.getElementById("transfer-section");
const bonusSection = document.getElementById("bonus-section");
const billSection = document.getElementById("bill-section");
const transactionSection = document.getElementById("transaction-section");

// add money event works
// add money feature button events
const addMoneyFeature = document.getElementById("add-money-feature");
addMoneyFeature.addEventListener("click", function () {
  addMoneySection.classList.remove("hidden");
  latestSection.classList.add("hidden");
  cashOutSection.classList.add("hidden");
  transferSection.classList.add("hidden");
  bonusSection.classList.add("hidden");
  billSection.classList.add("hidden");
  transactionSection.classList.add("hidden");
});
// adding money money events
const mainAccount = document.getElementById("main-account");
let mainAccountText = document.getElementById("main-account").innerText;
const addMoneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInputValue = document.getElementById("add-money-input").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;
    if (addMoneyPin === "1234") {
      const addedAmount = Number(addMoneyInputValue) + Number(mainAccountText);
      mainAccount.innerText = addedAmount;
    } else {
      alert("wrong pin");
    }
  });

// cash out event works
// cash out feature button events
const cashOutFeature = document.getElementById("cash-out-feature");
cashOutFeature.addEventListener("click", function () {
  cashOutSection.classList.remove("hidden");
  latestSection.classList.add("hidden");
  addMoneySection.classList.add("hidden");
  transferSection.classList.add("hidden");
  bonusSection.classList.add("hidden");
  billSection.classList.add("hidden");
  transactionSection.classList.add("hidden");
});
// cash out money events

const cashOutBtn = document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutInputValue = document.getElementById("cash-out-input").value;

    const cashOutPin = document.getElementById("cash-out-pin").value;
    if (cashOutPin === "1234") {
      const reducedAmount = Number(mainAccountText) - Number(cashOutInputValue);
      mainAccount.innerText = reducedAmount;
    } else {
      alert("wrong pin");
    }
  });

// transfer feature events

document
  .getElementById("transfer-feature")
  .addEventListener("click", function () {
    transferSection.classList.remove("hidden");
    addMoneySection.classList.add("hidden");
    cashOutSection.classList.add("hidden");
    bonusSection.classList.add("hidden");
    billSection.classList.add("hidden");
    transactionSection.classList.add("hidden");
    latestSection.classList.add("hidden");
  });

// bonus feature events
document.getElementById("bonus-feature").addEventListener("click", function () {
  bonusSection.classList.remove("hidden");
  transferSection.classList.add("hidden");
  addMoneySection.classList.add("hidden");
  cashOutSection.classList.add("hidden");
  billSection.classList.add("hidden");
  transactionSection.classList.add("hidden");
  latestSection.classList.add("hidden");
});

// pay bill feature event

document
  .getElementById("pay-bill-feature")
  .addEventListener("click", function () {
    billSection.classList.remove("hidden");
    transferSection.classList.add("hidden");
    addMoneySection.classList.add("hidden");
    cashOutSection.classList.add("hidden");
    bonusSection.classList.add("hidden");
    transactionSection.classList.add("hidden");
    latestSection.classList.add("hidden");
  });

// transaction feature event
document
  .getElementById("transaction-feature")
  .addEventListener("click", function () {
    transactionSection.classList.remove("hidden");
    transferSection.classList.add("hidden");
    addMoneySection.classList.add("hidden");
    cashOutSection.classList.add("hidden");
    bonusSection.classList.add("hidden");
    billSection.classList.add("hidden");
    latestSection.classList.add("hidden");
  });
