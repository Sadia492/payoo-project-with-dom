document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const loginNumber = document.getElementById("login-number").value;
    const loginPin = document.getElementById("login-pin").value;
    if (loginNumber === "5" && loginPin === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("wrong number or pin");
    }
  });
