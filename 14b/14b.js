document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate inputs
    var isValid = true;
  
    // Validate First Name
    var firstName = document.getElementById("firstName");
    var firstNameError = document.getElementById("firstNameError");
    if (!firstName.value.match(/^[A-Za-z]{1,50}$/)) {
      firstNameError.textContent = "First Name must contain alphabets only (1 to 50 characters)";
      isValid = false;
    } else {
      firstNameError.textContent = "";
    }
  
    // Validate Last Name
    var lastName = document.getElementById("lastName");
    var lastNameError = document.getElementById("lastNameError");
    if (lastName.value !== "" && !lastName.value.match(/^[A-Za-z]{1,50}$/)) {
      lastNameError.textContent = "Last Name must contain alphabets only (1 to 50 characters)";
      isValid = false;
    } else {
      lastNameError.textContent = "";
    }
  
    // Validate Date of Birth
    var dob = document.getElementById("dob");
    var dobError = document.getElementById("dobError");
    if (dob.value === "") {
      dobError.textContent = "Date of Birth is required";
      isValid = false;
    } else {
      dobError.textContent = "";
    }
  
    // Validate Gender
    var gender = document.getElementById("gender");
    var genderError = document.getElementById("genderError");
    if (gender.value === "") {
      genderError.textContent = "Please select a Gender";
      isValid = false;
    } else {
      genderError.textContent = "";
    }
  
    // Validate Provenience
    var provenience = document.getElementById("provenience");
    var provienceError = document.getElementById("provenienceError");
    if (provenience.value === "") {
      provienceError.textContent = "Please select a Provenience";
      isValid = false;
    } else {
      provienceError.textContent = "";
    }
  
    // Validate District
    var district = document.getElementById("district");
    var districtError = document.getElementById("districtError");
    if (district.value === "") {
      districtError.textContent = "Please select a District";
      isValid = false;
    } else {
      districtError.textContent = "";
    }
  
    // Validate Cell Phone
    var cellPhone = document.getElementById("cellPhone");
    var cellPhoneError = document.getElementById("cellPhoneError");
    if (!cellPhone.value.match(/^[0-9]{10}$/)) {
      cellPhoneError.textContent = "Cell Phone must be 10 digits only";
      isValid = false;
    } else {
      cellPhoneError.textContent = "";
    }
  
    // Validate Email
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    if (email.value !== "" && !email.value.match(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/)) {
        emailError.textContent = "Invalid Email Address";
        isValid = false;
        } else {
        emailError.textContent = "";
        }
        
        // Validate User Name
        var userName = document.getElementById("userName");
        var userNameError = document.getElementById("userNameError");
        if (!userName.value.match(/^[A-Za-z][A-Za-z0-9_@]{5,14}$/)) {
        userNameError.textContent = "User Name must start with an alphabet and can contain digits and only two special characters (@ and _). Length must be 6 to 15 characters";
        isValid = false;
        } else {
        userNameError.textContent = "";
        }
        
        // Validate Password
        var password = document.getElementById("password");
        var passwordError = document.getElementById("passwordError");
        if (!password.value.match(/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,20}$/)) {
        passwordError.textContent = "Password must contain at least one digit, one special character, one uppercase letter, and one lowercase letter. Length must be 8 to 20 characters";
        isValid = false;
        } else {
        passwordError.textContent = "";
        }
        
        // Validate Confirm Password
        var confirmPassword = document.getElementById("confirmPassword");
        var confirmPasswordError = document.getElementById("confirmPasswordError");
        if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
        } else {
        confirmPasswordError.textContent = "";
        }
        
        // Submit the form if all inputs are valid
        if (isValid) {
        alert("Registration successful!");
        this.submit();
        }
        });
  