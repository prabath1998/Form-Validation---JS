let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let username = document.getElementById("username");
let email = document.getElementById("email");
let form = document.getElementById("form");

document.querySelector("#submitbtn").onclick = function (e) {
  e.preventDefault();
  validateInputs();
};

let setError = (element, message) => {
  let inputControl = element.parentElement;
  inputControl.querySelector(".error").innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

let setSuccess = (element) => {
  let inputControl = element.parentElement;
  inputControl.querySelector(".error").innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

let validateInputs = () => {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please conform your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password doesn't match");
  } else {
    setSuccess(password2);
  }
};
