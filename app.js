'use strict';
// use strict will make the javascript to only take what it strictly has
const switcher = document.querySelector('topnav')
switcher.addEventListener('click', function() { //this handles the event when click happened.
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme'); // get each theme here

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});