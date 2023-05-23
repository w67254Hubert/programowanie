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


const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const imime=document.getElementById('name').value
  console.log(imime)
  const surnameInput = document.getElementById('surname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const valPassword = document.getElementById('valPassword')
  const genderInput = document.getElementById('gender');
  const phoneInput = document.getElementById('phone');
  const countryInput = document.getElementById('country');

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
})



