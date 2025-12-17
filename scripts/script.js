const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");

const toggleModalWindow = () => {
  modal.classList.toggle("modalHidden");
};

openModalBtn.addEventListener("click", toggleModalWindow);
modal.addEventListener("click", toggleModalWindow);
modalBody.addEventListener("click", (e) => e.stopPropagation());

// close via esc
// close via btn(close icon)

// закрытие через esc:
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("modalHidden")) {
    toggleModalWindow();
  }
});

// закрытие через крестик:
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", toggleModalWindow);

//////////////////////////////////////////////
//  form //
const registerForm = document.querySelector("#registerForm");
const usernameInput = document.querySelector(".username");
const lastnameInput = document.querySelector(".lastname");
const usernameLabel = document.querySelector(".usernameLabel");
const lastnameLabel = document.querySelector(".lastnameLabel");

const loginInput = document.querySelector(".login");
const loginLabel = document.querySelector(".loginLabel");
const passwordInput = document.querySelector(".password");
const passwordLabel = document.querySelector(".passwordLabel");

function renderStatusMessage(parent, data) {
  if (parent.lastElementChild.nodeName === "P") {
    parent.lastElementChild.remove();
  }
  const statusMessageElement = document.createElement("p");
  parent.appendChild(statusMessageElement);
  statusMessageElement.textContent = data.text;
  statusMessageElement.style.color = data.color;
}

function usernameValidation(value) {
  return value.length >= 2 && value.length <= 26
    ? {
        text: "valid data",
        color: "green",
      }
    : {
        text: "invalid data",
        color: "red",
      };
}

function lastnameValidation(value) {
  return value.length >= 2 && value.length <= 30
    ? {
        text: "last name is correct",
        color: "green",
      }
    : {
        text: "last name is not valid",
        color: "red",
      };
}
//////
function loginValidation(value) {
  const hasNumbers = /\d/; // ищет любую цифру
  return value.length >= 6 && value.length <= 24 && !hasNumbers.test(value)
    ? {
        text: "login is correct",
        color: "green",
      }
    : {
        text: "login is not valid",
        color: "red",
      };
}
///
function passwordValidation(value) {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\]/;

  return value.length >= 8 && specialCharRegex.test(value)
    ? {
        text: "password is correct",
        color: "red",
      }
    : {
        text: "minimum 8 characters and 1 special character",
        color: "green",
      };
}
//////
usernameInput.addEventListener("input", (event) => {
  const statusData = usernameValidation(event.target.value);
  renderStatusMessage(usernameLabel, statusData);
});

lastnameInput.addEventListener("input", (event) => {
  const statusData = lastnameValidation(event.target.value);
  renderStatusMessage(lastnameLabel, statusData);
});
//////
loginInput.addEventListener("input", (event) => {
  const statusData = loginValidation(event.target.value);
  renderStatusMessage(loginLabel, statusData);
});

passwordInput.addEventListener("input", (event) => {
  const statusData = passwordValidation(event.target.value);
  renderStatusMessage(passwordLabel, statusData);
});
////////
///////////////////////////////////////////////////////////
