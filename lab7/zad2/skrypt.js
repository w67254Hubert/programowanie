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
function isStrongPassword(inputValue) {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   return passwordRegex.test(inputValue);
 }


 const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const genderInput = document.getElementById('gender');
  const phoneInput = document.getElementById('phone');
  const birthdateInput = document.getElementById('birthdate');
  const countryInput = document.getElementById('country');

  if (!isNotEmpty(nameInput.value)) {
    alert('Pole "Imię" jest wymagane');
    return;
  }

  if (!hasValidLength(nameInput.value, 2, 50)) {
    alert('Pole "Imię" powinno zawierać od 2 do 50 znaków');
    return;
  }

  if (!isNotEmpty(surnameInput.value)) {
    alert('Pole "Nazwisko" jest wymagane');
    return;
  }

  if (!hasValidLength(surnameInput.value, 2, 50)) {
    alert('Pole "Nazwisko" powinno zawierać od 2 do 50 znaków');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Pole "Email" powinno zawierać poprawny adres email');
    return;
  }

  if (!isNotEmpty(passwordInput.value)) {
    alert('Pole "Hasło" jest wymagane');
    return;
  }

  if (!hasValidLength(passwordInput.value, 8, 50)) {
    alert('Pole "Hasło" powinno zawierać od 8 do 50 znaków');
    return;
  }

  if (!isStrongPassword(passwordInput.value)) {
    alert('Pole "Hasło" powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę');
    return;
  }

  if (!isNotEmpty(genderInput.value)) {
    alert('Pole "Płeć" jest wymagane');
    return;
  }

  if (!isNotEmpty(phoneInput.value, 9, 9)) {
    alert('Pole "Telefon" jest wymagane');
    return;
  }

  if (!isNotEmpty(birthdateInput.value)) {
    alert('Pole "Data urodzenia" jest wymagane');
    return false;
  }

  if (!isNotEmpty(countryInput.value)) {
    alert('Pole "Kraj" jest wymagane');
    return false;
  }
})
