const contactForm = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");

const nameError = document.getElementById("name-error");
const subjectError = document.getElementById("subject-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");

function submitForm(e) {
  e.preventDefault();

  // Validation
  if (!NameRegex.test(fullName.value)) {
    fullName.classList.add("error-border");
    nameError.style.display = "block";
    isValid = false;
  }

  if (!emailRegex.test(email.value)) {
    email.classList.add("error-border");
    emailError.style.display = "block";
    isValid = false;
  }

  if (!phoneNumberRegex.test(phoneNumber.value)) {
    phoneNumber.classList.add("error-border");
    phoneError.style.display = "block";
    isValid = false;
  }

  if (subject.value === "") {
    subject.classList.add("error-border");
    subjectError.style.display = "block";
    isValid = false;
  }

  if (message.value === "") {
    message.classList.add("error-border");
    messageError.style.display = "block";
    isValid = false;
  }
  if (isValid) {
    document.getElementById("scard").style.display = "block";
  }

  return isValid;
}

// regex expressions
const NameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex =
  /(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/;

var isValid = true;

// Clear previous error states
fullName.classList.remove("error-border");
subject.classList.remove("error-border");
email.classList.remove("error-border");
message.classList.remove("error-border");
phoneNumber.classList.remove("error-border");

document.getElementById("name-error").style.display = "none";
document.getElementById("subject-error").style.display = "none";
document.getElementById("email-error").style.display = "none";
document.getElementById("message-error").style.display = "none";
document.getElementById("phone-error").style.display = "none";

contactForm.addEventListener("submit", submitForm);
