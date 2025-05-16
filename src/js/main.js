// function submitForm(fieldNum) {
function submitForm() {
  // firstName
  let firstName = document.getElementById("firstName").value.trim();
  let firstNameError = document.getElementById("firstNameError");

  //   lastName
  let lastName = document.getElementById("lastName").value.trim();
  let lastNameError = document.getElementById("lastNameError");

  //   email
  let email = document.getElementById("email").value.trim();
  let emailError = document.getElementById("emailError");

  //   password
  let password = document.getElementById("password").value.trim();
  let passwordError = document.getElementById("passwordError");
  let togglePass = document.getElementById("togglePass");

  //   confirmPassword
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let toggleConfirmPass = document.getElementById("toggleConfirmPass");

  //   dateOfBirth
  let dobInput = document.getElementById("dob").value;
  let dobError = document.getElementById("dobError");

  //   gender
  let gender = document.querySelector('input[name="gender"]:checked');
  let genderError = document.getElementById("genderError");
  let otherGenderError = document.getElementById("otherGenderError");
  let extraInput = document.getElementById("extraInput").value.trim();

  // checkboxes
  let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
  let checkboxError = document.getElementById("checkboxError");

  // textarea
  let message = document.getElementById("message").value.trim();
  let messageError = document.getElementById("messageError");

  //   file upload
  let fileUpload = document.getElementById("fileUpload");
  let fileUploadError = document.getElementById("fileUploadError");

  //   firstName validation
  // if (fieldNum == "1" || fieldNum == "0") {
  if (firstName.length === 0) {
    firstNameError.innerHTML = "First name is required.";
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    firstNameError.textContent = "First Name must only contain letters.";
  } else if (firstName.length < 3) {
    firstNameError.textContent = "At least 3 characters required.";
  } else {
    firstNameError.textContent = "";
  }
  // }

  // //   lastName validation
  // if (fieldNum == "2" || fieldNum == "0") {
  if (lastName.length === 0) {
    lastNameError.innerHTML = "Last name is required.";
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    lastNameError.textContent = "Last Name must only contain letters.";
  } else if (lastName.length < 3) {
    lastNameError.textContent = "At least 3 characters required.";
  } else {
    lastNameError.textContent = "";
  }
  // }

  //   email validation
  // if (fieldNum == "3" || fieldNum == "0") {
  if (email.length === 0) {
    emailError.textContent = "Email is required.";
  } else if (!/^[a-z]/.test(email)) {
    emailError.textContent = "Email must start with lowercase letters.";
  } else if (!/^[a-z]+@[a-z]+\.[a-z]{2,3}$/.test(email)) {
    emailError.textContent = "Email must contain one @ and one .";
  } else {
    emailError.textContent = "";
  }
  // }

  // **Password Validation**
  // if (fieldNum == "4" || fieldNum == "0") {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (password.length === 0) {
    passwordError.innerHTML = "Password is required.";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  } else if (!regex.test(password)) {
    passwordError.textContent =
      "Password must be 8+ characters with letters and numbers.";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  } else {
    passwordError.textContent = "";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  }
  // }

  // **Confirm Password Validation**
  // if (fieldNum == "5" || fieldNum == "0") {
  if (confirmPassword.length === 0) {
    confirmPasswordError.innerHTML = "Please confirm your password.";
  } else if (password != confirmPassword) {
    // console.log(password + " = " + confirmPassword);
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }
  // }

  // dateOfBirth validation
  // if (fieldNum == "6" || fieldNum == "0") {
  if (dobInput === "") {
    dobError.innerHTML = "Date of birth is required.";
  } else {
    dobError.innerHTML = "";
  }
  // }

  //   gender validation
  // if (fieldNum == "7" || fieldNum == "0") {
  if (!gender) {
    genderError.textContent = "Please select your gender.";
  } else {
    genderError.textContent = ""; // ✔️ Clear error as soon as something is selected

    if (gender.value === "Other") {
      if (extraInput.length === 0) {
        otherGenderError.textContent = "Input field cannot be empty.";
      } else if (!/^[a-zA-Z]+$/.test(extraInput)) {
        otherGenderError.textContent = "Only letters are allowed.";
      } else if (extraInput.length < 3) {
        otherGenderError.textContent = "At least 3 characters required.";
      } else {
        otherGenderError.textContent = "";
      }
    } else {
      // If selected gender is not "Other", make sure other input is cleared
      otherGenderError.textContent = "";
    }
  }

  //   checkboxes validation
  // if (fieldNum == "13" || fieldNum == "0") {
  if (checkboxes.length === 0) {
    checkboxError.innerHTML = "Select at least one checkbox.";
  } else {
    checkboxError.innerHTML = "";
  }
  // }

  //   textarea validation
  // if (fieldNum == "11" || fieldNum == "0") {
  if (message.length === 0) {
    messageError.innerHTML = "Message cannot be empty.";
  } else if (message.length < 3) {
    messageError.innerHTML = "Message must be at least 3 characters.";
  } else if (message.length > 500) {
    messageError.innerHTML = "Message cannot exceed 500 characters.";
  } else {
    messageError.innerHTML = "";
  }
  // }

  // file upload validation
  // if (fieldNum == "12" || fieldNum == "0") {
  let maxFileSize = 2 * 1024 * 1024; // 2 MB
  if (!fileUpload.value) {
    fileUploadError.innerHTML = "Please select a file.";
  } else if (fileUpload.files[0].size > maxFileSize) {
    fileUploadError.innerHTML = "File size exceeds the limit of 2MB.";
  } else {
    fileUploadError.innerHTML = "";
  }
  // }

  // **Final Form Validation**
  if (
    firstName.length === 0 ||
    lastName.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0 ||
    dobInput.length === 0
  ) {
    fillFormError.innerHTML = "Please fill in all required fields";
  } else {
    // Check if any validation error is still showing
    const allErrorFields = document.querySelectorAll(
      "#firstNameError, #lastNameError, #emailError, #passwordError, #confirmPasswordError, #dobError, #genderError, #otherGenderError, #messageError, #fileUploadError, #checkboxError"
    );

    let hasError = false;

    allErrorFields.forEach((error) => {
      if (error.textContent.trim() !== "") {
        hasError = true;
      }
    });

    if (hasError) {
      fillFormError.innerHTML = "Please fix all form errors before submitting.";
    } else {
      fillFormError.innerHTML = "Form submitted successfully";

      let inputs = registrationForm.querySelectorAll("input, textarea");

      inputs.forEach((input) => {
        if (
          (input.type === "checkbox" || input.type === "radio") &&
          input.checked
        ) {
          console.log(input.name + ": " + input.value);
        } else if (
          input.type !== "checkbox" &&
          input.type !== "radio" &&
          input.value.trim() !== ""
        ) {
          console.log(input.name + ": " + input.value);
        }

        // Clear inputs
        input.value = "";
        if (input.type === "checkbox" || input.type === "radio") {
          input.checked = false;
        }
      });

      // Clear password toggle icons
      eyeIcon.innerHTML = "";
      eyeIconConfirm.innerHTML = "";
    }
  }
}

function toggleEyeIcon() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let togglePass = document.getElementById("togglePass");
  let toggleConfirmPass = document.getElementById("toggleConfirmPass");

  // Show or hide password eye icon
  if (password.value.length > 0) {
    togglePass.classList.remove("hidden");
  } else {
    togglePass.classList.add("hidden");
  }

  // Show or hide confirm password eye icon
  if (confirmPassword.value.length > 0) {
    toggleConfirmPass.classList.remove("hidden");
  } else {
    toggleConfirmPass.classList.add("hidden");
  }
}

// toggle password visibility function
function togglePassword() {
  let password = document.getElementById("password");
  let eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.innerHTML = `
            <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
            1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
            c-1.99-4.61-6.19-7.5-11-7.5z"></path>
            <circle cx="12" cy="12" r="3"></circle>`;
  } else {
    password.type = "password";
    eyeIcon.innerHTML = `<path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
            1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
            c-1.99-4.61-6.19-7.5-11-7.5z"></path>`;
  }
}

// toggle confirm password visibility function
function toggleConfirmPassword() {
  let confirmPassword = document.getElementById("confirmPassword");
  let eyeIconConfirm = document.getElementById("eyeIconConfirm");

  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    eyeIconConfirm.innerHTML = `
      <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
      1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
      c-1.99-4.61-6.19-7.5-11-7.5z"></path>
      <circle cx="12" cy="12" r="3"></circle>`;
  } else {
    confirmPassword.type = "password";
    eyeIconConfirm.innerHTML = `
      <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
      1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
      c-1.99-4.61-6.19-7.5-11-7.5z"></path>`;
  }
}

// optional info input
function toggleInput() {
  let extraInput = document.getElementById("extraInput");
  let maleOption = document.querySelector('input[name="gender"][value="Male"]');
  let femaleOption = document.querySelector(
    'input[name="gender"][value="Female"]'
  );
  let otherOption = document.querySelector(
    'input[name="gender"][value="Other"]'
  );

  // Show input if "Other" is selected, hide otherwise
  if (otherOption.checked) {
    extraInput.classList.remove("hidden");
  } else if (femaleOption.checked || maleOption.checked) {
    extraInput.classList.add("hidden");
    otherGenderError.innerHTML = "";
  } else {
    extraInput.classList.add("hidden");
  }
}

// **Submit Button Event**
let button = document.getElementById("submitButton");
button.addEventListener("click", function (event) {
  event.preventDefault();
  submitForm();
  // submitForm(0);
});

// oninput form validation
function submitForm2(th) {
  const formInputs = th.value.trim();

  // firstNameError
  const firstNameError = document.getElementById("firstNameError");
  // lastNameError
  const lastNameError = document.getElementById("lastNameError");
  // emailError
  let emailError = document.getElementById("emailError");
  // passwordError
  let password = document.getElementById("password").value.trim();
  let passwordError = document.getElementById("passwordError");
  let togglePass = document.getElementById("togglePass");
  // confirmPasswordError
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let toggleConfirmPass = document.getElementById("toggleConfirmPass");
  // dobError
  let dobError = document.getElementById("dobError");
  // genderError
  let gender = document.querySelector('input[name="gender"]:checked');
  let genderError = document.getElementById("genderError");
  let otherGenderError = document.getElementById("otherGenderError");
  // messageError
  let messageError = document.getElementById("messageError");
  // fileUploadError
  let fileUploadError = document.getElementById("fileUploadError");
  // checkboxError
  let checkboxError = document.getElementById("checkboxError");

  // firstName validation
  if (th.classList.contains("firstName")) {
    if (formInputs.length === 0) {
      firstNameError.textContent = "First name is required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (!/^[A-Za-z]+$/.test(formInputs)) {
      firstNameError.textContent = "First Name must only contain letters.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (formInputs.length < 3) {
      firstNameError.textContent = "At least 3 characters required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      firstNameError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // lastName validation
  if (th.classList.contains("lastName")) {
    if (formInputs.length === 0) {
      lastNameError.textContent = "First name is required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (!/^[A-Za-z]+$/.test(formInputs)) {
      lastNameError.textContent = "First Name must only contain letters.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (formInputs.length < 3) {
      lastNameError.textContent = "At least 3 characters required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      lastNameError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // email validation
  if (th.classList.contains("email")) {
    if (formInputs.length === 0) {
      emailError.textContent = "Email is required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (!/^[a-z]/.test(formInputs)) {
      emailError.textContent = "Email must start with lowercase letters.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (!/^[a-z]+@[a-z]+\.[a-z]{2,3}$/.test(formInputs)) {
      emailError.textContent = "Email must contain one @ and one .";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      emailError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // password validation
  if (th.classList.contains("password")) {
    if (formInputs.length === 0) {
      passwordError.textContent = "Password is required.";
      th.classList.remove("border");
      th.classList.add("border-error");
      togglePass.style.bottom = "2rem";
      toggleConfirmPass.style.bottom = "2rem";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formInputs)) {
      passwordError.textContent =
        "Password must be 8+ characters with letters and numbers.";
      togglePass.style.bottom = "2rem";
      toggleConfirmPass.style.bottom = "2rem";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      passwordError.textContent = "";
      togglePass.style.bottom = "2rem";
      toggleConfirmPass.style.bottom = "2rem";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // // confirmPassword validation
  if (th.classList.contains("confirmPassword")) {
    if (formInputs.length === 0) {
      confirmPasswordError.textContent = "Please confirm your password.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (password != confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      confirmPasswordError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // dob validation
  if (th.classList.contains("dob")) {
    if (formInputs === "") {
      dobError.textContent = "Date of birth is required.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      dobError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // gender validation
  if (th.classList.contains("gender")) {
    if (th.classList.contains("gender")) {
      if (!gender) {
        genderError.textContent = "Please select your gender.";
      } else {
        genderError.textContent = ""; // 🟢 Clear the error as soon as any gender is selected

        if (gender.value === "Other") {
          if (formInputs.length === 0) {
            otherGenderError.textContent = "Input field cannot be empty.";
            th.classList.remove("border");
            th.classList.add("border-error");
          } else if (!/^[a-zA-Z]+$/.test(formInputs)) {
            otherGenderError.textContent = "Only letters are allowed.";
            th.classList.remove("border");
            th.classList.add("border-error");
          } else if (formInputs.length < 3) {
            otherGenderError.textContent = "At least 3 characters required.";
            th.classList.remove("border");
            th.classList.add("border-error");
          } else {
            otherGenderError.textContent = "";
          }
        } else {
          // If not "Other", clear Other input field error
          otherGenderError.textContent = "";
        }
      }
    }
  }

  // textarea validation
  if (th.classList.contains("message")) {
    if (formInputs.length === 0) {
      messageError.textContent = "Message cannot be empty.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (formInputs.length < 3) {
      messageError.textContent = "Message must be at least 3 characters.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else if (formInputs.length > 500) {
      messageError.textContent = "Message cannot exceed 500 characters.";
      th.classList.remove("border");
      th.classList.add("border-error");
    } else {
      messageError.textContent = "";
      th.classList.remove("border-error");
      th.classList.add("border");
    }
  }

  // fileUpload validation
  let maxFileSize = 2 * 1024 * 1024; // 2 MB
  if (th.classList.contains("file")) {
    if (!fileUpload.value) {
      fileUploadError.textContent = "Please select a file.";
    } else if (fileUpload.files[0].size > maxFileSize) {
      fileUploadError.textContent = "File size exceeds the limit of 2MB.";
    } else {
      fileUploadError.textContent = "";
    }
  }

  // checkboxes validation
  if (th.classList.contains("checkbox")) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      checkboxError.textContent = "Select at least one checkbox.";
    } else {
      checkboxError.textContent = "";
    }
  }
}
