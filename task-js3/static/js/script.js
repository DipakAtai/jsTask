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