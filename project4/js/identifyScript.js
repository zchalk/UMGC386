let valid = "";
let button = document.getElementById('idButton');
let form = document.getElementById('identification-form');

function plantValidation () {
    let idFirstName = document.getElementById('idFirstName');
    let idLastName = document.getElementById('idLastName');
    let idEmail = document.getElementById('idEmail');
    let imageUpload = document.getElementById('imageUpload');

    if (idFirstName.value == "") {
        valid = false;
    } else if (idLastName.value == "") {
        valid = false;
    } else if (idEmail.value == "") {
        valid = false;
    } else if (imageUpload.value == "") {
        valid = false;
    } else {
        valid = true;
    }
}
function plantValidationForm (event) {
    event.preventDefault();
    form.checkValidity();
    form.reportValidity();
    plantValidation();
    if (valid) {
    document.location.href = "confirmation/identifyconfirmation.html";
    }
}

button.addEventListener("click", plantValidationForm);