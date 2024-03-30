document.addEventListener('DOMContentLoaded', function() {
    // Set body styles
    document.body.style.backgroundColor = '#333';
    document.body.style.color = 'black';

    // Set container styles
    let container = document.getElementById('container');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.backgroundColor = 'hsl(0, 0%, 100%)';
    container.style.width = '1200px';
    container.style.height = '620px';
    container.style.margin = 'auto';
    container.style.gap = '20px';

    // Set left side styles
    let left = document.getElementById('left');
    left.style.width = '30%';
    left.style.backgroundImage = 'url("./images/bg-main-desktop.png")';
    left.style.display = 'flex';
    left.style.flexDirection = 'column';
    left.style.padding = '20px';
    left.style.gap = '30px';

    // Set front card styles
    let front = document.getElementById('front');
    front.style.backgroundImage = 'url("./images/bg-card-front.png")';
    front.style.width = '440px';
    front.style.height = '240px';
    front.style.borderRadius = '10px';
    front.style.marginTop = '30px';

    // Set back card styles
    let back = document.getElementById('back');
    back.style.backgroundImage = 'url("./images/bg-card-back.png")';
    back.style.width = '440px';
    back.style.height = '240px';
    back.style.borderRadius = '10px';
    back.style.marginLeft = '130px';
    back.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)';

    // Set cvc-value styles
    let cvcValue = document.getElementById('cvc-value');
    cvcValue.style.marginTop = '110px';
    cvcValue.style.marginLeft = '350px';
    cvcValue.style.fontSize = '20px';
    cvcValue.style.fontWeight = '500';
    cvcValue.style.color = 'hsl(0, 0%, 100%)';

    // Set right side styles
    let right = document.getElementById('right');
    right.style.width = '70%';
    right.style.display = 'flex';
    right.style.flexDirection = 'column';
    right.style.marginLeft = '240px';
    right.style.padding = '20px';

    // Set form styles
    let form = document.getElementById('card-form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '15px';
    form.style.marginTop = '100px';

    // Set input styles
    const cardNumberInput = document.querySelector('#card-form input[placeholder="e.g. 1234 5678 9123 000"]');
    const cardholderNameInput = document.querySelector('#card-form input[placeholder="e.g. Jane Appleseed"]');
    const mmInput = document.querySelectorAll('#card-form input[placeholder="MM"]')[0];
    const yyInput = document.querySelectorAll('#card-form input[placeholder="YY"]')[0];
    const cvcInput = document.querySelector('#card-form input[placeholder="e.g. 123"]');
    const cardholderNameLabel = document.querySelector('label[for="Cardholder Name"]');
    const cardNumberLabel = document.querySelector('label[for="Card Number"]');
    const expirationDateLabel = document.querySelector('label[for="Expiration Date"]');
    const cvcLabel = document.querySelector('label[for="CVC"]');

    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value;
        let cardNumber = document.getElementById('account-number');
        let digitPattern = /^\d+$/;
        let errorLabel = document.getElementById('account-error');

        if (digitPattern.test(value) || value === '') {
            let formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

            if (formattedValue.length <= 19) {
                cardNumberInput.style.backgroundColor = 'white';
                cardNumberInput.style.borderColor = 'black';
                cardNumberInput.style.color = 'black';
                cardNumberInput.style.borderRadius = '5px';

                // Remove error message if it exists
                if (errorLabel) {
                    errorLabel.textContent = '';
                }

                cardNumber.textContent = formattedValue;
            } else {
                // Error handling for exceeding 16 characters
                handleInputError('Card number must not exceed 16 characters');
                cardNumber.textContent = formattedValue.slice(0, 19);
            }
        } else {
            // Error handling for non-numeric input
            handleInputError('Wrong format, numbers only');
            cardNumber.textContent = '';
        }

        // Function to handle input errors
        function handleInputError(errorMessage) {
            cardNumberInput.style.backgroundColor = 'white';
            cardNumberInput.style.borderColor = 'hsl(0, 100%, 85%)';
            cardNumberInput.style.color = 'black';
            cardNumberInput.style.borderRadius = '5px';

            // Remove error message if it exists
            if (errorLabel) {
                errorLabel.textContent = errorMessage;
                errorLabel.style.color = 'red';
            } else {
                // Create a new error message element
                errorLabel = document.createElement('div');
                errorLabel.id = 'account-error';
                errorLabel.style.color = 'hsl(0, 100%, 70%)';
                errorLabel.textContent = errorMessage;
                cardNumberInput.parentElement.appendChild(errorLabel);
            }
        }


    });

    cardholderNameInput.addEventListener('input', (e) => {
        let value = e.target.value;
        let cardholder = document.getElementById('user');

        if (value.length <= 17) {
            cardholder.textContent = value;
        } else {
            this.value = value.slice(0, 16);
            cardholder.textContent = this.value;
        }
    });

    mmInput.addEventListener('input', updateExpirationDate);
    yyInput.addEventListener('input', updateExpirationDate);


    function updateExpirationDate() {
        const mmValue = mmInput.value;
        const yyValue = yyInput.value;
        const expirationDate = document.getElementById('expiration-date');
        if (mmValue <= 31) {

            if (mmValue && yyValue) {
                expirationDate.textContent = `${mmValue.padStart(2, '0')}/${yyValue.padStart(2, '0')}`;
            }

        }
    }
    cvcInput.addEventListener('input', (e) => {
        let value = e.target.value;
        let cvcValue = document.getElementById('cvc-value');
        if (value <= 3) {
            cvcValue.textContent = value;
        } else {
            this.value = value.slice(0, 3);
            cvcValue.textContent = this.value;
        }
    });


    // Set label styles
    cardholderNameLabel.style.color = 'hsl(278, 68%, 11%)';
    cardholderNameLabel.style.fontSize = '15px';
    cardholderNameLabel.style.fontWeight = '700';
    mmInput.style.color = 'hsl(278, 68%, 11%)';
    mmInput.style.fontSize = '15px';
    mmInput.style.fontWeight = '700';
    cardNumberLabel.style.color = 'hsl(278, 68%, 11%)';
    cardNumberLabel.style.fontSize = '15px';
    cardNumberLabel.style.fontWeight = '700';
    expirationDateLabel.style.color = 'hsl(278, 68%, 11%)';
    expirationDateLabel.style.fontSize = '15px';
    expirationDateLabel.style.fontWeight = '700';
    cvcLabel.style.color = 'hsl(278, 68%, 11%)';
    cvcLabel.style.fontSize = '15px';
    cvcLabel.style.fontWeight = '700';

    // Applying styles to the input placeholders
    cardNumberInput.style.fontFamily = "'Space Grotesk', sans-serif";
    cardNumberInput.style.fontWeight = '500';
    cardNumberInput.style.fontSize = '15px';
    cardholderNameInput.style.fontFamily = "'Space Grotesk', sans-serif";
    cardholderNameInput.style.fontWeight = '500';
    cardholderNameInput.style.fontSize = '15px';
    mmInput.style.fontFamily = "'Space Grotesk', sans-serif";
    mmInput.style.fontWeight = '500';
    mmInput.style.fontSize = '15px';
    yyInput.style.fontFamily = "'Space Grotesk', sans-serif";
    yyInput.style.fontWeight = '500';
    yyInput.style.fontSize = '15px';
    cvcInput.style.fontFamily = "'Space Grotesk', sans-serif";
    cvcInput.style.fontWeight = '500';
    cvcInput.style.fontSize = '15px';

    cardNumberInput.style.width = '300px';
    cardNumberInput.style.height = '30px';
    cardNumberInput.style.borderRadius = '5px';
    cardNumberInput.style.border = '2px solid hsl(270, 3%, 87%)';
    cardNumberInput.style.padding = '5px';
    cardNumberInput.style.outline = 'none';
    cardNumberInput.style.cursor = 'pointer';

    cardholderNameInput.style.width = '300px';
    cardholderNameInput.style.height = '30px';
    cardholderNameInput.style.borderRadius = '5px';
    cardholderNameInput.style.border = '2px solid hsl(270, 3%, 87%)';
    cardholderNameInput.style.padding = '5px';
    cardholderNameInput.style.outline = 'none';
    cardholderNameInput.style.cursor = 'pointer';

    mmInput.style.width = '65px';
    mmInput.style.height = '30px';
    mmInput.style.borderRadius = '5px';
    mmInput.style.border = '2px solid hsl(270, 3%, 87%)';
    mmInput.style.padding = '5px';
    mmInput.style.outline = 'none';
    mmInput.style.cursor = 'pointer';

    yyInput.style.width = '65px';
    yyInput.style.height = '30px';
    yyInput.style.borderRadius = '5px';
    yyInput.style.border = '2px solid hsl(270, 3%, 87%)';
    yyInput.style.padding = '5px';
    yyInput.style.outline = 'none';
    yyInput.style.cursor = 'pointer';

    cvcInput.style.width = '80px';
    cvcInput.style.height = '30px';
    cvcInput.style.borderRadius = '5px';
    cvcInput.style.border = '2px solid hsl(270, 3%, 87%)';
    cvcInput.style.padding = '5px';
    cvcInput.style.outline = 'none';
    cvcInput.style.cursor = 'pointer';

    // Set expiration date styles
    let expiration = document.getElementById('expiration');
    expiration.style.display = 'flex';
    expiration.style.gap = '10px';
    expiration.style.flexDirection = 'row';

    // Set submit button styles
    const submit = document.querySelector('.right button[type="submit"]');
    submit.style.width = '300px';
    submit.style.height = '45px';
    submit.style.marginTop = '20px';
    submit.style.borderRadius = '5px';
    submit.style.backgroundColor = 'hsl(278, 68%, 11%)';
    submit.style.color = 'hsl(0, 0%, 100%)';
    submit.style.border = 'none';
    submit.style.cursor = 'pointer';

    // Set the front card details styles
    let accountNumber = document.getElementById('account-number');
    accountNumber.style.display = 'flex';
    accountNumber.style.flexDirection = 'row';
    accountNumber.style.fontSize = '35px';
    accountNumber.style.fontWeight = '500';
    accountNumber.style.color = 'hsl(0, 0%, 100%)';
    accountNumber.style.marginTop = '50px';
    accountNumber.style.marginLeft = '20px';

    let userDetails = document.getElementById('details');
    userDetails.style.display = 'flex';
    userDetails.style.flexDirection = 'row';
    userDetails.style.fontSize = '20px';
    userDetails.style.fontWeight = '500';
    userDetails.style.color = 'hsl(0, 0%, 100%)';
    userDetails.style.marginTop = '10px';
    userDetails.style.gap = '180px';
    userDetails.style.marginLeft = '20px';

    const card1 = document.getElementById('card-form');
    const card2 = document.getElementById('hide');
    const submitButton = document.querySelector('.right button[type="submit"]');
    //set styles for card2
    card2.style.marginRight = '220px';
    card2.style.marginTop = '190px'

    // Hide the first card and show the second card when confirm button is clicked
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        card1.style.display = 'none';
        card2.style.display = 'block';
        card2.classList.remove('hide');
    });

    const continueButton = document.querySelector('.card2 button[type="button"]');
    continueButton.style.width = '300px';
    continueButton.style.height = '45px';
    continueButton.style.marginTop = '20px';
    continueButton.style.borderRadius = '5px';
    continueButton.style.backgroundColor = 'hsl(278, 68%, 11%)';
    continueButton.style.color = 'hsl(0, 0%, 100%)';
    continueButton.style.border = 'none';
    continueButton.style.cursor = 'pointer';

    continueButton.addEventListener('click', (e) => {
        e.preventDefault();
        card1.style.display = 'flex';
        card2.style.display = 'none';
    });




});