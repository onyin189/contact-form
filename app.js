const buttonclicked = false;
const validateForm =()=>{

    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    inputs.forEach((input)=> input.classList.remove('invalid'));
    errors.forEach((error)=> error.textContent = '');
    
    let invalid = false;

    const firstName = document.querySelector('#firstName');
    const firstNameErr = document.querySelector('.first-name-err');

    if(firstName.value == ''){
       firstNameErr.textContent = 'This field is required';
       firstName.classList.add('invalid');
       invalid = true;
    }
    if(/^\d/.test(firstName.value)){
        firstNameErr.textContent = 'Text should not contain a number';
        firstName.classList.add('invaid');
        invalid = true;
    }

// lastname validation
   const lastName = document.querySelector('#lastName');
   const lastname = document.querySelector('.lastname');

   if(lastName.value == ''){
    lastname.textContent = 'This field is required';
    lastName.classList.add('invalid');
    invalid = true;
   }
   if(/^\d/.test(lastName.value)){
    lastname.textContent = 'Input should not start with a number';
    lastName.classList.add('invalid');
    invalid = true;
   }

//    const emailRegex = `/^[a-zA-Z0-9._%+-]+@{a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
   const email = document.querySelector('#email');
   const email_err = document.querySelector('. email-err');

   if(email.value.trim() == ''){
    email_err.textContent = 'This field is required';
    email.classList.add('invalid');
    invalid = true;
   }
   if(!/^[a-zA-Z0-9._%+-]+@{a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())){
    email_err.textContent = 'Invalid email address';
    email.classList.add('invalid');
    invalid = true;
   }
   if(!buttonclicked){
    query_err.textContent = 'Please select a query type';
    invalid = true;
   }

   const textarea = document.querySelector('#textarea');
   const textarea_err = document.querySelector('.textarea-err');

   if(textarea.value=''){
    textarea_err.textContent = 'This field is required';
    textarea.classList.add('invalid');
    invalid = true;
   }
   if(!isChecked){
    check_err.textContent = 'To submit this form, please consent to being contacted';
    invalid = true;
   }
}

document.querySelector('#form').addEventListener('submit',(event)=>{
    event.preventDefault();
    validateForm();
});

const general_query = document.querySelector('.general-query');
const general_query_img = document.querySelector('.general-query >span >img')
const support_request = document.querySelector('.support-request');
const support_request_img = document.querySelector('.support-request > span > img');
const query_err = document.querySelector('.query-err');

general_query.onclick =()=>{
    general_query.classList.add('selected');
    general_query_img.style.display = 'block';
    support_request.classList.remove('selected');
    support_request_img.style.display = 'none';
    buttonclicked = true;
}
support_request.onclick =()=>{
    support_request.classList.add('selected');
    support_request_img.style.display = 'block';
    general_query.classList.remove('selected');
    general_query_img.style.display = 'none';
    buttonclicked = true;
}
consent.onclick 