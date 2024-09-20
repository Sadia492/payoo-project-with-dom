function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = Number(inputValue);
  return inputNumber;
}

function showSection(id) {
  // hide sections
  document.getElementById("latest-section").classList.add("hidden");
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");

  document.getElementById("transfer-section").classList.add("hidden");
  document.getElementById("bonus-section").classList.add("hidden");
  document.getElementById("bill-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  //   show section
  document.getElementById(id).classList.remove("hidden");
}

function addToTransactionHistory(operation, inputValue, currentBalance) {
  const transactionSection = document.getElementById("transaction-section");

  let row = `
      <div
          class="bg-white flex justify-between items-center py-3 px-4 rounded-2xl mt-4"
        >
          <div class="flex items-center">
            <div
              class="rounded-full bg-[#f4f5f7] w-11 h-11 flex justify-center items-center mr-2"
            >
              <img src="images/add-money.png" alt="" />
            </div>
            <div>
              <h4 class="font-semibold text-lg">${operation}</h4>
              <p>${operation} ${inputValue} and your balance is ${currentBalance}</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
      `;
  transactionSection.innerHTML += row;
  return row;
}
