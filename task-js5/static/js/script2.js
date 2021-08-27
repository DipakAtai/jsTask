// ########################## Script for toggle2 example   ###################################

var toggle_btn2 = document.getElementById('toggle2');
var text_msg = document.getElementById('txt-msg2');
var link = document.querySelector('.link');



toggle_btn2.addEventListener('change', () => {

    console.log('clicked')
    toggle_btn2.classList.toggle('toggle');
    document.body.classList.toggle('toggle');
    link.classList.toggle('toggle')
})