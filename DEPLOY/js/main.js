
document.addEventListener("DOMContentLoaded", function(event) {

    var trigger = document.getElementById("menu-trigger");
    var el = document.getElementById("menu-reveal");

    trigger.onclick = function() {

        event.preventDefault();

        //Toggle class
        if (el.classList) {
            el.classList.toggle('menu--show');
        }
        else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf('menu--show');

            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            }
            else {
                classes.push('menu--show');
            }
            el.className = classes.join(' ');
        }

    };

});
