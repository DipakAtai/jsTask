function sidebarToggelMenu() {
    document.getElementById("mySidebarDropdown").classList.toggle("show");
    console.log(document.querySelector('.sidebar-dropdown--content').className)
    if (document.querySelector('.sidebar-dropdown--content').className === "sidebar-dropdown--content show") {
        console.log("I am here")
        document.querySelector('.sidebar-dropdown').style = "padding-bottom: 160px"
    } else {
        document.querySelector('.sidebar-dropdown').style = "padding-bottom: 10px"
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.sidebar-dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("sidebar-dropdown--content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}