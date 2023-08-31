const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit', (e)=>{

      
    if(validateInputs()){
     
      e.preventDefault();
    }
})

function validateInputs(){
     const usernameVal =username.value.trim();
     const emailVal =email.value.trim();
     const passwordVal =password.value.trim();
     const cpasswordVal =cpassword.value.trim();
     let success = true

     if(usernameVal === ''){
      success = false
        setError(username, 'Username is Required');
     }else{
        setSuccess(username)
     }

     if(emailVal === ''){
      success = false
        setError(email, 'E-mail is Required');
     }else if (!validateEmail(emailVal)){
        setError(email, 'Please enter a valid E-mail');
     }else{
        setSuccess(email);
     }

     if (passwordVal === ''){
      success = false
        setError(password, 'Password is Required');
     }else if(passwordVal.length<8){
        setError(password, 'Password must be atleast 8 characters long')
     }else{
        setSuccess(password)
     }

     if (cpasswordVal === ''){
      success = false
        setError(cpassword, 'Confirmed Password is Required');
     }else if(cpasswordVal !== passwordVal){
        setError(cpassword, 'Password does not matched!')
     }else{
        setSuccess(cpassword)
     }

     return success
}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}

function setSuccess(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/      
      
      );
};


