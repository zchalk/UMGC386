
let valid = "";

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
function plantValidationForm () {
    plantValidation();
    if (valid) {
    document.location.href = "confirmation/identifyconfirmation.html";
    }
}