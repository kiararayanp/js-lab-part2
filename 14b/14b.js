// Function to validate the form on submit
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Clear existing error messages
    clearErrorMessages();
  
    // Fetch form inputs
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('gender');
    const provienceInput = document.getElementById('provenience');
    const districtInput = document.getElementById('district');
    const cellPhoneInput = document.getElementById('cellPhone');
    const emailInput = document.getElementById('email');
    const userNameInput = document.getElementById('userName');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    // Validate first name
    if (!validateAlphabetsOnly(firstNameInput.value) || !validateLength(firstNameInput.value, 1, 50)) {
      showError(firstNameInput, 'First name must contain alphabets only and be 1 to 50 characters long.');
    }
  
    // Validate last name
    if (lastNameInput.value && (!validateAlphabetsOnly(lastNameInput.value) || !validateLength(lastNameInput.value, 1, 50))) {
      showError(lastNameInput, 'Last name must contain alphabets only and be 1 to 50 characters long.');
    }
  
    // Validate date of birth
    if (!dobInput.value) {
      showError(dobInput, 'Date of birth is required.');
    }
  
    // Validate gender
    if (genderInput.value === '') {
      showError(genderInput, 'Please select a gender.');
    }
  
    // Validate provience
    if (provenienceInput.value === '') {
      showError(provenienceInput, 'Please select a provience.');
    }
  
    // Validate district
    if (districtInput.value === '') {
      showError(districtInput, 'Please select a district.');
    }
  
    // Validate cell phone
    if (!validateCellPhone(cellPhoneInput.value)) {
      showError(cellPhoneInput, 'Cell phone number must be 10 digits only.');
    }
  
    // Validate email
    if (emailInput.value && !validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address.');
    }
  
    // Validate username
    if (!validateUsername(userNameInput.value)) {
      showError(userNameInput, 'Username must start with an alphabet, contain digits, and be 6 to 15 characters long.');
    }
  
    // Validate password
    if (!validatePassword(passwordInput.value)) {
      showError(
        passwordInput,
        'Password must contain at least a digit, a special character, an uppercase letter, and a lowercase letter. It should be 8 to 20 characters long.'
      );
    }
  
    // Validate confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
      showError(confirmPasswordInput, 'Passwords do not match.');
    }
  
    // Submit the form if there are no errors
    if (!document.querySelectorAll('.error').length) {
      document.getElementById('registrationForm').submit();
    }
  }
  
  // Function to validate if a value contains alphabets only
  function validateAlphabetsOnly(value) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value);
  }
  
  // Function to validate if a value is within a specified length range
  function validateLength(value, min, max) {
    return value.length >= min && value.length <= max;
  }
  
  // Function to validate cell phone number (10digits only)
function validateCellPhone(value) {
    const regex = /^\d{10}$/;
    return regex.test(value);
    }
    
    // Function to validate email address format
    function validateEmail(value) {
    const regex = /\S+@\S+.\S+/;
    return regex.test(value);
    }
    
    // Function to validate username (starts with alphabet, allows digits, and length between 6 to 15 characters)
    function validateUsername(value) {
    const regex = /^[A-Za-z][A-Za-z0-9_@]{5,14}$/;
    return regex.test(value);
    }
    
    // Function to validate password (at least a digit, a special character, an uppercase letter, and a lowercase letter; length between 8 to 20 characters)
    function validatePassword(value) {
    const regex = /(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,20}/;
    return regex.test(value);
    }
    
    // Function to display an error message next to an input field
    function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    }
    
    // Function to clear all error messages
    function clearErrorMessages() {
    const errorSpans = document.getElementsByClassName('error');
    Array.from(errorSpans).forEach((span) => (span.textContent = ''));
    }
    
    // Attach form submit event listener
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', validateForm);
  