// log-out event

document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "./login.html";
});

// add money event works
// add money feature button events
const addMoneyFeature = document.getElementById("add-money-feature");
const latestSection = document.getElementById("latest-section");
const addMoneySection = document.getElementById("add-money-section");
addMoneyFeature.addEventListener("click", function () {
  addMoneySection.classList.remove("hidden");
  latestSection.classList.add("hidden");
});
// adding money money events
const mainAccount = document.getElementById("main-account").innerText;
const addMoneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInputValue = document.getElementById("add-money-input").value;
    const addMoneyPin = document.getElementById("add-money-pin").value;
    if (addMoneyPin === "1234") {
      const addedAmount = Number(addMoneyInputValue) + Number(mainAccount);
      console.log(addedAmount);
    } else {
      alert("wrong pin");
    }
  });
