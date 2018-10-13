const emails = ['test@test.com'];

const emailInput = document.getElementById('email-input');

const emailButton = document.getElementById('email-button');

console.log(emails, emailInput, emailButton);

emailButton.addEventListener('click', handleButton);

const response = document.getElementById('response');

function handleButton() {
    const email = emailInput.value;
    if (emails.includes(email)) {
        response.innerHTML = 'Account already exists.';
    } else {
        response.innerHTML = 'Success';
        emails.push(email);
        emailInput.value = '';
    }
}
