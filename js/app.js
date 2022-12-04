let input = document.querySelector('#modal-input');
let btn = document.querySelector('#modal-btn');
let modalError = document.querySelector('#modal-error');
let form = document.querySelector('form');
let inputMask = new Inputmask('+(381) 999-999-99');

inputMask.mask(input);

btn.addEventListener ('click', () => {
    if (input.value == "+(381) 111-111-11") {
        window.location.href = "pin.html";
    } else {
        input.style.border = '1px solid #FA0101';
        modalError.style.visibility = 'visible';
    }    
});