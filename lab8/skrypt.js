function isNotEmpty(inputValue) {
    if (inputValue.trim() === '') {

        return false;
    }
    return true;
  }
function hasValidLength(inputValue, minLength, maxLength) {
   if (inputValue.length < minLength || inputValue.length > maxLength) {
        return false;
   }
   return true;
 }
function isValidEmail(inputValue) {
   const emailRegex = /\S+@\S+\.\S+/;
   return emailRegex.test(inputValue);
 }
 /*/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/*/
function isStrongPassword(inputValue) {
   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
   return passwordRegex.test(inputValue);
 }
 function validateBirthdate(inputValue) {
    const today = new Date();
    const birth = new Date(inputValue);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 18;
  }


const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const valPassword = document.getElementById('valPassword')
  const genderInput = document.getElementById('gender');
  const phoneInput = document.getElementById('phone');
  const birthdateInput = document.getElementById('birthdate');
  const countryInput = document.getElementById('country');

//lab 8 nie jest ładne ale działa


function requiredValidation(field) {
  //Zad 3 - span i errorField
  const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
  //
  if (!field.value || field.value === '') {
      //Zad 2
      //field.setCustomValidity('To pole jest wymagane');
      errorField.innerHTML = 'To pole jest wymagane';
      return true;
  }
  else {
      //Zad 2
      //field.setCustomValidity('');
      errorField.innerHTML = '';
      return false;
  }
}

const countyField = document.querySelector("[name='country']");
// console.log("kraj"+countyField)
let provinceField = document.querySelector("[name='province']");
const province = document.querySelector('.province');
const provinceSelect = document.querySelector('.province.select');
countyField.addEventListener('change', () => {
    const result = requiredValidation(countyField);

    if (countyField.value === "Polska") {
        province.hidden = true;
        provinceSelect.hidden = false;
        provinceField = document.querySelector(".province.select [name='province']");

        provinceField.removeEventListener('input', provinceField);
        provinceField.addEventListener('change', () => {
            validProvince();
        });
    }
    else {
        province.hidden = false;
        provinceSelect.hidden = true;

        provinceField = document.querySelector("[name='province']");

        provinceField.removeEventListener('change', provinceField);
        provinceField.addEventListener('input', () => {
            validProvince();
        });
    }

    provinceField.disabled = result;
});

const addressField = document.querySelector("[name='address']");
const contactAddressField = document.querySelector("[name='contactAddress']");

function validProvince() {
    const result = requiredValidation(provinceField);
    addressField.disabled = result;
    contactAddressField.disabled = result;
}


addressField.addEventListener('input', () => {
    requiredValidation(addressField);
    hasValidLength(addressField, 3,100);
});
contactAddressField.addEventListener('input', () => {
    requiredValidation(contactAddressField);
    hasValidLength(contactAddressField, 3,100);
});

/// Adres korespondencyjny
const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");

checkboxField.addEventListener('change', () => {contactAddress.hidden = checkboxField.checked;
});

//ograniczenie pola texst do cyfr

  phoneInput.addEventListener("input", function(event) {
    var inputValue = event.target.value;
    var numericValue = inputValue.replace(/\D/g, ""); // Usuwa znaki nie będące cyframi

    phoneInput.value = numericValue;
  });
//lab 8 end







  if (!isNotEmpty(nameInput.value)) {
    document.getElementById("name-error").innerHTML = "Pole Imię jest wymagane ";
    return;
  }else{
    document.getElementById("name-error").innerHTML = null;
  }

  if (!hasValidLength(nameInput.value, 2, 50)) {
    document.getElementById("name-error").innerHTML = "Pole Imię powinno zawierać od 2 do 50 znaków ";
    return;
  }else{
    document.getElementById("name-error").innerHTML = null;
  }

  if (!isNotEmpty(surnameInput.value)) {
    document.getElementById("surname-error").innerHTML = "Pole Nazwisko jest wymagane ";
    return;
  }else{
    document.getElementById("surname-error").innerHTML = null;
  }

  if (!hasValidLength(surnameInput.value, 2, 50)) {
    document.getElementById("surname-error").innerHTML = "Pole Nazwisko powinno zawierać od 2 do 50 znaków ";
    return;
  }else{
    document.getElementById("surname-error").innerHTML = null;
  }

  if (!isValidEmail(emailInput.value)) {
    document.getElementById("email-error").innerHTML = "Pole Email powinno zawierać poprawny adres email ";
    return;
  }else{
    document.getElementById("email-error").innerHTML = null;
  }

  if (!isNotEmpty(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło jest wymagane ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }
  
  if (!hasValidLength(passwordInput.value, 8, 50)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać od 8 do 50 znaków ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }

  if (!isStrongPassword(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę ";
    return;
  }

  if (!isNotEmpty(valPassword.value)) {
    document.getElementById("valPassword-error").innerHTML = "Powtórz hasło ";
    return;
  }else{
    document.getElementById("valPassword-error").innerHTML = null;
  }

  if (valPassword.value!=passwordInput.value) {
    document.getElementById("valPassword-error").innerHTML = "Hasła się nie zgadzają ";
    return;
  }else{
    document.getElementById("valPassword-error").innerHTML = null;
  }

  if (!isNotEmpty(genderInput.value)) {
    document.getElementById("gender-error").innerHTML = "Pole Płeć jest wymagane ";
    return;
  }else{
    document.getElementById("gender-error").innerHTML = null;
  }

  if (!isNotEmpty(phoneInput.value, 9, 9)) {
    document.getElementById("phone-error").innerHTML = "Pole Telefon jest wymagane ";
    return;
  }else{
    document.getElementById("phone-error").innerHTML = null;
  }

  if (!validateBirthdate(birthdateInput.value)) {
    document.getElementById("birthdate-error").innerHTML = "Wymagany wiek to 18 lat  ";
    return;
  }else{
    document.getElementById("birthdate-error").innerHTML = null;
  }

  if (!requiredValidation(countryInput.value)) {
    document.getElementById("country-error").innerHTML = "Pole Kraj jest wymagane ";
    return false;
  }
})

