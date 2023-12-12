let stateArray = ['','Alabama','Alaska','American Samoa','Arizona','Armed Forces America','Armed Forces Europe','Armed Forces Pacific','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

for (const state of stateArray) {
    let stateInput = document.getElementById('state');
    let newStateOption = document.createElement('option');

    newStateOption.innerText = state;
    newStateOption.setAttribute('value', state);
    stateInput.appendChild(newStateOption);
};