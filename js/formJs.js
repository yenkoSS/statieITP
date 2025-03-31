const formNameEl = document.querySelector("#form-name"); /* query form name input*/
const formEmailEl = document.querySelector("#form-email"); /* query form email input*/
const formPhoneEl = document.querySelector("#form-phone"); /* query form phone input*/
const formMessageEl =
  document.querySelector("#form-message"); /* query form message input*/
const textErrorEl = document.querySelector(".text-error"); /* query text-error */
const textSuccessEl = document.querySelector(".text-success"); /* query text-success */

emailjs.init("eSvonNDBWdPw7EXFY"); /* emailJS public KEY*/
const templateID = "template_952np1l"; /* emailJS templateID */
const serviceId = "service_mywu9tt"; /* emailJS serviceID */

function sendEmail() {
  let params = {
    name: formEmailEl.value,
    email: formEmailEl.value,
    phone: formPhoneEl.value,
    message: formMessageEl.value,
  };

  emailjs
    .send(serviceId, templateID, params)
    .then((textSuccessEl.style.display = "block"));
}

function clearForm() {
  formNameEl.value = "";
  formEmailEl.value = "";
  formPhoneEl.value = "";
  formMessageEl.value = "";
}

document.querySelector(".form-contact").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Clear previous error messages
  textErrorEl.textContent = "";

  // Validate Message
  let message = formMessageEl.value;
  if (message === "") {
    textErrorEl.textContent = "Introduceți mesajul dvs.";
    isValid = false;
  }

  // Validate Phone
  let phone = formPhoneEl.value;
  if (phone === "") {
    textErrorEl.textContent = "Introduceți numărul dvs. de telefon.";
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    textErrorEl.textContent = "Introduceți un număr de telefon valid.";
    isValid = false;
  }

  // Validate Email
  let email = formEmailEl.value;
  if (email === "") {
    textErrorEl.textContent = "Introduceți adresa dvs. de email.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    textErrorEl.textContent = "Introduceți o adresă de email validă.";
    isValid = false;
  }

  // Validate Name
  let name = formNameEl.value;
  if (name === "") {
    textErrorEl.textContent = "Introduceți numele dvs. complet.";
    isValid = false;
  }

  if (isValid) {
    sendEmail();
    clearForm(); // Prevent form submission if validation fails
  }
});
