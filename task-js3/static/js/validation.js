// validation script here
const inp_field = {
    name: /^[a-z\d]{3,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    contactNo: /^\d{10}$/,
    gender: /^[1|2]$/,
    country: /^[^\s]/

}


const validate = (field, regex) => {
    regex.test(field.value) ?
        (
            (field.className === 'form-check-input') ?
            field.className = 'form-check-input valid' : field.className = 'form-control valid') :
        ((field.className === 'form-check-input') ?
            field.className = 'form-check-input invalid' : field.className = 'form-control invalid');


}

let keys = document.querySelectorAll('input');
let selectKey = document.querySelector('select')
console.log(keys)
keys.forEach(item => item.addEventListener(
    'change', e => {
        console.log(item)
        console.log(e)
        console.log(inp_field[e.target.attributes.name.value])
        validate(e.target, inp_field[e.target.attributes.name.value])
    }
));
selectKey.addEventListener('change', e => {
    validate(e.target, inp_field[e.target.attributes.name.value])
})

// onsubmit validate form
// const submitForm = (e) => {
//     e.preventDefault();
//     const inp_field = {
//         name: /^[a-z\d]{5,12}$/i,
//         email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
//         // password: /^[#\w@_-]{8,20}$/,
//         contactNo: /^\d{10}$/,

//     }

//     const validate = (field, regex) => {
//         regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
//     }

//     let keys = document.querySelectorAll('input');
//     keys.forEach(item => item.addEventListener(
//         'keyup', e => {
//             validate(e.target, inp_field[e.target.attributes.name.value])
//         }
//     ));

// }

// addEventListener('submit', submitForm);

// form validation

var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const submitForm = (e) => {
    e.preventDefault();
    console.log(e.path[0]);

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNo = document.getElementById('contactNo').value;
    var genderM = document.getElementById('male').checked;
    var genderF = document.getElementById('female').checked;
    var country = document.getElementById('country').value;

    // error document
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError')
    var contactNoError = document.getElementById('contactNoError')
    var genderError = document.getElementById('genderError')
    var counteryError = document.getElementById('counteryError')

    // verify name
    if (name === '' || name === 'undefined') {
        var message = "Name is required";
        nameError.innerHTML = message
        nameError.classList.add("activeError");

    } else if (name.length > 20 || name.length < 5) {
        var message = "Name  should be more than 5 and less than 20 characters";
        nameError.innerHTML = message
        nameError.classList.add("activeError");

    } else {
        var message = "Name is validated";
        nameError.innerHTML = message
        nameError.classList.remove('bg-danger');
        nameError.classList.add('bg-success')
        nameError.classList.add("activeError");
    }

    // verify email
    if (email === '' || email === 'undefined') {
        var message = "Email is required";
        emailError.innerHTML = message
        emailError.classList.add("activeError");
    } else if (email.match(validEmailRegex)) {
        var message = "Email is validated";
        emailError.innerHTML = message
        emailError.classList.remove('bg-danger');
        emailError.classList.add('bg-success')
        emailError.classList.add("activeError");

    } else {

        var message = "Email is containg '@' and domian name";
        emailError.innerHTML = message
        emailError.classList.add("activeError");
    }

    // verify Contact number
    if (contactNo === '' || contactNo === 'undefined') {
        var message = "contactNo is required";
        contactNoError.innerHTML = message
        contactNoError.classList.add("activeError");

    } else if (isNaN(contactNo)) {
        var message = "contact Number  should be Number";
        contactNoError.innerHTML = message
        contactNoError.classList.add("activeError");

    } else if (contactNo.length > 10 || contactNo.length < 10) {
        var message = "contact Number  should be 10 digit only";
        contactNoError.innerHTML = message
        contactNoError.classList.add("activeError");

    } else {
        var contactNo = "contact Number is validated";
        contactNoError.innerHTML = message
        contactNoError.classList.remove('bg-danger');
        contactNoError.classList.add('bg-success')
        contactNoError.classList.add("activeError");
    }
    // verify Gender
    if (genderM || genderF) {
        var contactNo = "gender is validated";
        genderError.innerHTML = message
        genderError.classList.remove('bg-danger');
        genderError.classList.add('bg-success')
        genderError.classList.add("activeError");


    } else {
        var message = "gender is required";
        genderError.innerHTML = message
        genderError.classList.add("activeError");
    }
    // verify Country
    if (country === '' || country === 'undefined') {
        var message = "Country name is required";
        counteryError.innerHTML = message
        counteryError.classList.add("activeError");

    } else {
        var message = "Country name  is validated";
        counteryError.innerHTML = message
        counteryError.classList.remove('bg-danger');
        counteryError.classList.add('bg-success')
        counteryError.classList.add("activeError");
    }

    // e.path[0].reset()

    setTimeout(() => {
        nameError.classList.remove('activeError');
        emailError.classList.remove('activeError')
        contactNoError.classList.remove('activeError')
        genderError.classList.remove('activeError')
        counteryError.classList.remove('activeError')

        // document.getElementById('contactNoError').classList.remove('activeError')
    }, 8000)

}
addEventListener('submit', submitForm);