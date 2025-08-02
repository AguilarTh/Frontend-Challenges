/* ELEMENTOS FORMS */

const form = document.querySelector('#form');
const mortAmountInput = document.querySelector('#iAmount');
const mortTermInput = document.querySelector('#iTerm');
const mortRateInput = document.querySelector('#iRate');

const monthlyRepaym = document.querySelector('#monthly-number');
const totalRepaym = document.querySelector('#total-number');

const amountErrorMsg = document.querySelector('#iAmount-error-msg');
const termErrorMsg = document.querySelector('#iTerm-error-msg');
const rateErrorMsg = document.querySelector('#iRate-error-msg');
const boxErrorMsg = document.querySelector('#iBox-error-msg');

function showErrorInputBox(inputElement, messageElement) {
    inputElement.closest('.input-box').classList.add('has-error');
    messageElement.textContent = "Need fill this block";
}

function showErrorInputOptions(inputElement, messageElement) {
    inputElement.closest('.options-box').classList.add('has-error');
    messageElement.textContent = "Need fill this block";
}

function clearErrorInputBox(inputElement, messageElement) {
    inputElement.closest('.input-box').classList.remove('has-error');
    messageElement.textContent = '';
}

function clearErrorInputOptions(inputElement, messageElement) {
    inputElement.closest('.options-box').classList.remove('has-error');
    messageElement.textContent = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;

    clearErrorInputBox(mortAmountInput, amountErrorMsg);
    clearErrorInputBox(mortTermInput, termErrorMsg);
    clearErrorInputBox(mortRateInput, rateErrorMsg);

    if (mortAmountInput.value.trim() === ''){
        showErrorInputBox(mortAmountInput, amountErrorMsg);
        isFormValid = false;
    }
})
