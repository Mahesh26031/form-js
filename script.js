const form = document.getElementById("form");

const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('#last-name-error');
const dob = document.getElementById("dob");
const dobError = document.querySelector('#dob-error');
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.querySelector('#password-error');
let errors = {firsterror: 0,lasterror: 0,derror: 0,passerror: 0};

firstName.addEventListener('change', function(event) {

  const firstNameValue = firstName.value.trim();
  
  if (!firstNameValue) {
    firstName.classList.add('error');
    firstNameError.textContent = 'First name cannot be empty';
    errors.firsterror=1
    
  } else if (firstName.value.length > 25) {
    firstName.classList.add('error');
    firstNameError.textContent = 'First name must not be greater than 25 characters';
    errors.firsterror=1
  } 
  else {
    firstName.classList.remove('error');
    firstNameError.textContent = '';
    errors.firsterror=0
  }

});

lastName.addEventListener('change', function(event) {

  const lastNameValue = lastName.value.trim();

  if (!lastNameValue) {
    lastName.classList.add('error');
    lastNameError.textContent = 'Last name cannot be empty';
  }else if (lastName.value.length > 25) {
      lastName.classList.add('error');
      lastNameError.textContent = 'Last name must not be greater than 25 characters';
      errors.lasterror = 1
    } 
    else {
      lastName.classList.remove('error');
      lastNameError.textContent = '';
      errors.lasterror = 0
    }
  
});

dob.addEventListener('change', function(event) {

    const birth = new Date(document.getElementById("dob").value);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();

    if (age <18) {
        dob.classList.add('error');
        dobError.textContent = 'Age must be greater than 18 years';
        errors.derror = 1
      } 
    else {
        dob.classList.remove('error');
        dobError.textContent = '';
        errors.derror = 0
      }
      
});

confirmPassword.addEventListener('change',function(event){

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        confirmPasswordError.textContent = 'Password doesnt match';
        errors.passerror = 1
      }
    else{
        confirmPassword.classList.remove('error');
        confirmPasswordError.textContent = '';
        errors.passerror = 0
    }  

})


form.addEventListener("submit", (event) => {

  event.preventDefault();
 
  if(errors.firsterror|| errors.lasterror || errors.passerror || errors.derror)
  {
    return ;
  }
  
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');

  const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];

  if (registeredEmails.includes(email.value)) {
    emailError.textContent = 'You are already registered with this email';
  } 
  else {
    email.classList.remove('error');
    emailError.textContent = '';
    registeredEmails.push(email.value);
    localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
    alert('You have successfully registered');
    form.reset()
  }

});