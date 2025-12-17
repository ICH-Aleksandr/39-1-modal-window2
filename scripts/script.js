const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");

const toggleModalWindow = () => {
  modal.classList.toggle("modalHidden");
};

openModalBtn.addEventListener("click", toggleModalWindow);
modal.addEventListener("click", toggleModalWindow);
modalBody.addEventListener("click", (e) => e.stopPropagation());

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
const firstnameInput = document.querySelector(".firstname");
const usernameLabel = document.querySelector(".usernameLabel");
const lastnameLabel = document.querySelector(".lastnameLabel");
const firstnameLabel = document.querySelector(".firstnameLabel");

const EmailInput = document.querySelector(".Email");
const EmailLabel = document.querySelector(".EmailLabel");
const passwordInput = document.querySelector(".password");
const passwordLabel = document.querySelector(".passwordLabel");
const ageInput = document.querySelector(".age");
const ageLabel = document.querySelector(".ageLabel");

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

function firstnameValidation(value) {
  return value.length >= 2 && value.length <= 30
    ? {
        text: "first name is correct",
        color: "green",
      }
    : {
        text: "first name is not valid",
        color: "red",
      };
}

//////
function EmailValidation(value) {
  const hasNumbers = /\d/; // ищет любую цифру
  return value.length >= 6 && value.length <= 24 && !hasNumbers.test(value)
    ? {
        text: "Email is correct",
        color: "green",
      }
    : {
        text: "Email is not valid",
        color: "red",
      };
}
///
function passwordValidation(value) {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\]/;

  return value.length >= 8 && specialCharRegex.test(value)
    ? {
        text: "password is correct",
        color: "green",
      }
    : {
        text: "minimum 8 characters and 1 special character",
        color: "red",
      };
}

function ageValidation(value) {
  const age = Number(value);

  if (!Number.isInteger(age)) {
    return {
      text: "age must be a number",
      color: "red",
    };
  }

  return age >= 1 && age <= 120
    ? {
        text: "valid data",
        color: "green",
      }
    : {
        text: "invalid data",
        color: "red",
      };
}

///////////////////
usernameInput.addEventListener("input", (event) => {
  const statusData = usernameValidation(event.target.value);
  renderStatusMessage(usernameLabel, statusData);
});

lastnameInput.addEventListener("input", (event) => {
  const statusData = lastnameValidation(event.target.value);
  renderStatusMessage(lastnameLabel, statusData);
});

firstnameInput.addEventListener("input", (event) => {
  const statusData = firstnameValidation(event.target.value);
  renderStatusMessage(firstnameLabel, statusData);
});
//////
EmailInput.addEventListener("input", (event) => {
  const statusData = EmailValidation(event.target.value);
  renderStatusMessage(EmailLabel, statusData);
});

passwordInput.addEventListener("input", (event) => {
  const statusData = passwordValidation(event.target.value);
  renderStatusMessage(passwordLabel, statusData);
});

ageInput.addEventListener("input", (event) => {
  const statusData = ageValidation(event.target.value);
  renderStatusMessage(ageLabel, statusData);
});

///////////////////////////////////////////////////////////
