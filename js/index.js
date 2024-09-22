// reading operation
const mainAccount = document.getElementById("main-account");

// log-out event

document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "./login.html";
});

//   feature works
// add money feature button events
const addMoneyFeature = document.getElementById("add-money-feature");
addMoneyFeature.addEventListener("click", function () {
  showSection("add-money-section");
});
// cash out feature events
const cashOutFeature = document.getElementById("cash-out-feature");
cashOutFeature.addEventListener("click", function () {
  showSection("cash-out-section");
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

let addValue = 0;
//   add money

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addPin = getInputValueById("add-money-pin");
    if (addPin === 1234) {
      const addInputValue = getInputValueById("add-money-input");
      addValue += addInputValue;
      mainAccount.innerText = addValue;
      addToTransactionHistory("Added money", addInputValue, addValue);
    } else {
      return alert("wrong pin");
    }
  });

//   cashout
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashPin = getInputValueById("cash-out-pin");
    if (cashPin === 1234) {
      const cashOutInputValue = getInputValueById("cash-out-input");
      addValue -= cashOutInputValue;
      mainAccount.innerText = addValue;
      addToTransactionHistory("Cashed Out", cashOutInputValue, addValue);
    } else {
      return alert("wrong pin");
    }
  });
// transfer money

document
  .getElementById("transfer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferPin = getInputValueById("transfer-pin");
    if (transferPin === 1234) {
      const transferInputValue = getInputValueById("transfer-input");

      addValue -= transferInputValue;
      mainAccount.innerText = addValue;

      addToTransactionHistory(
        "Transferred Money",
        transferInputValue,
        addValue
      );
    } else {
      return alert("wrong pin");
    }
  });

//   get bonus

document
  .getElementById("coupon-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const couponInputValue = document.getElementById("coupon-input").value;

    if (couponInputValue === "Zasdha") {
      addValue += 100;
      mainAccount.innerText = addValue;
      addToTransactionHistory("got bonus", 100, addValue);
    } else {
      return alert("invalid coupon");
    }
  });

//   pay bill

document.getElementById("bill-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const billPin = getInputValueById("bill-pin");
  if (billPin === 1234) {
    const billInputValue = getInputValueById("bill-input");

    addValue -= billInputValue;
    mainAccount.innerText = addValue;

    addToTransactionHistory("bill payed", billInputValue, addValue);
  } else {
    return alert("wrong pin");
  }
});
