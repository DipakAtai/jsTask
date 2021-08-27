document.querySelector('.container').style.display = "none";
(function() {
    // math trick 2*pi*57 = 358, must be less than 360 degree 
    var circle = document.getElementById('green-halo');
    var pointer = document.getElementById('pointer');

    var myTimer = document.getElementById('myTimer');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    var max_angle = 340; //parseInt(Math.random()*360); 

    window.timer = window.setInterval(function() {
        var cos = Math.cos(angle / 180 * Math.PI);
        var sen = Math.sin(angle / 180 * Math.PI);
        circle.setAttribute("stroke-dasharray", angle + ", 20000");
        circle.setAttribute("stroke", "hsl(" + parseInt(angle / 360 * 100) + ", 90%, 45%)"); 
        console.log(angle)
        console.log(cos)
        pointer.setAttribute("cx", 100 + (sen * 57));
        pointer.setAttribute("cy", 100 - (cos * 57));
        myTimer.innerHTML = parseInt(angle / 360 * 100) + '%';
        myTimer.setAttribute("fill", "hsl(" + parseInt(angle / 360 * 100) + ", 90%, 45%)");

        if (angle >= max_angle) {
            window.clearInterval(window.timer);
            document.querySelector('.circular').style.display = "none";
            document.querySelector('.container').style.display = "block";
        }
        angle += angle_increment;
    }.bind(this), interval);
})()