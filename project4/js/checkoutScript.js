let stateArray = ['','Alabama','Alaska','American Samoa','Arizona','Armed Forces America','Armed Forces Europe','Armed Forces Pacific','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
let valid = "";



for (const state of stateArray) {
    let stateInput = document.getElementById('state');
    let newStateOption = document.createElement('option');

    newStateOption.innerText = state;
    newStateOption.setAttribute('value', state);
    stateInput.appendChild(newStateOption);
};

function checkoutContactValidation () {
    let firstNameCheckout = document.getElementById('firstNameCheckout');
    let lastNameCheckout = document.getElementById('lastNameCheckout');
    let emailCheckout = document.getElementById('emailCheckout');

    if (firstNameCheckout.value == "") {
        valid = false;
    } else if (lastNameCheckout.value == "") {
        valid = false;
    }else if (emailCheckout.value == "") {
        valid = false;
    } else {
        valid = true;
    }
}

function addressValidation () {
    let streetAddress = document.getElementById('streetAddress');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let zip = document.getElementById('zip');

    if (streetAddress.value == "") {
        valid = false;
    } else if (city.value == "") {
        valid = false;
    } else if (state.value == "") {
        valid = false;
    } else if (zip.value == "") {
        valid = false;
    } else {
        valid = true;
    }
}

function checkoutValidation () {
    checkoutContactValidation();
    addressValidation();
    if (valid) {
        document.location.href = 'confirmation/purchaseconfirmation.html'
    }
}
