
/*jslint devel: true */

function validateForm() {
    "use strict";
    var x = document.forms.myForm.email.value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}