var toggle_btn = document.getElementById('toggle');
var text_msg = document.getElementById('txt-msg');
var link = document.querySelector('.link a');
toggle_btn.addEventListener('change', () => {

    if (toggle_btn.checked) {
        document.body.style.backgroundColor = '#ffff'
        text_msg.innerHTML = "Light Mode";
        text_msg.classList.remove('dark--mode');
        text_msg.classList.add('light--mode');
        link.classList.remove('link__item')
        link.classList.add('toggle')
    } else {
        document.body.style.backgroundColor = 'black'
        text_msg.innerHTML = "Dark Mode";
        text_msg.classList.remove('light--mode');
        text_msg.classList.add('dark--mode');
        link.classList.remove('toggle')
        link.classList.add('link__item')
    }

})