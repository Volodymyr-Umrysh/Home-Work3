let btnSubmit=document.querySelector('.btn');
let inputs=document.querySelectorAll('input');
let long = document.querySelector(".long");
let lower = document.querySelector(".lower");
let upper = document.querySelector(".upper");
let number = document.querySelector(".number");
let myInput = document.querySelector(".pass");
let getSel = selector => document.querySelector(selector);

let validationObj={
    first_name:/^[a-zA-Z]\w{1,14}$/,
    last_name:/^[a-zA-Z]\w{1,14}$/,
    phone_number:/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/,
    username:/^[a-zA-Z]\w{1,14}$/,
    email:/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,4})$/,
    password:/^[a-zA-Z]\w{3,14}$/,
    confirm_password:/^[a-zA-Z]\w{3,14}$/
}

btnSubmit.addEventListener('click', () => {
    inputs.forEach(input => {

        if(validationObj[input.dataset.name].test(input.value)){
            input.classList.remove('is-invalid')
            input.classList.add('is-valid') 
        }else{
            input.classList.remove('is-valid')
            input.classList.add('is-invalid')
        }
        if(input.dataset.name==='password'||input.dataset.name==='confirm_password'){
            const password = document.querySelector('input[data-name=password]')
                const confirm_password = document.querySelector('input[data-name=confirm_password]')
            if(validationObj['password'].test(password.value)&&validationObj['confirm_password'].test(confirm_password.value)){
            
                if(password.value===confirm_password.value){
                    confirm_password.classList.add('is-valid');
                    password.classList.add('is-valid');
                    confirm_password.classList.remove('is-invalid');
                    password.classList.remove('is-invalid');
                }
                else{
                    confirm_password.classList.remove('is-valid');
                    password.classList.remove('is-valid');
                    confirm_password.classList.add('is-invalid');
                    password.classList.add('is-invalid');
                }

            }else{
                confirm_password.classList.remove('is-valid');
                    password.classList.remove('is-valid');
                    confirm_password.classList.add('is-invalid');
                    password.classList.add('is-invalid');
            }
           
        }
    })
})


getSel('.pass').onkeyup  = function() {
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      lower.checked = true
    } else {
      lower.checked = false;
    }
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      upper.checked = true;
    } else {
      upper.checked = false;
    }
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.checked = true;
    } else {
      number.checked = false;
    }
    if (myInput.value.length >= 8) {
      long.checked = true;
    } else {
      long.checked = false;
    }
  };


